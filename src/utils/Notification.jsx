// UploadNotifier.js
import PushNotification from 'react-native-push-notification';

const CHANNEL_ID = 'Channel1';
let permissionsGranted = false;
let lastProgressValue = {};

/**
 * Converts ID to stringified number (for Android consistency)
 */
const normalizeId = (id) => String(parseInt(id) || 1);

const Notification = {
  /**
   * Initialize the notification channel (Android only)
   */
 async initChannel() {
   await PushNotification.createChannel(
      {
        channelId: CHANNEL_ID,
        channelName: 'General Notifications',
        channelDescription: 'Notifications for uploads and messages',
        importance: 4,
        vibrate: true,
      },
      (created) => console.log(`[Notification] Channel created: ${created}`)
    );
  },

  /**
   * Check and request notification permissions (cached)
   */
  async ensurePermissions() {
    if (permissionsGranted) return true;

    const permissions = await new Promise((resolve) =>
      PushNotification.checkPermissions(resolve)
    );

    const granted =
      permissions?.alert === true || permissions?.authorizationStatus === 1;

    if (!granted) {
      const requested = await PushNotification.requestPermissions();
      permissionsGranted =
        requested?.alert === true || requested?.authorizationStatus === 1;
    } else {
      permissionsGranted = true;
    }

    return permissionsGranted;
  },

  /**
   * Show start notification
   */
  async showStart({ id, title }) {
    if (!(await this.ensurePermissions())) return;

    await PushNotification.localNotification({
      id: normalizeId(id),
      channelId: CHANNEL_ID,
      title: title || 'Uploading...',
      message: 'Upload started...',
      ongoing: true,
      importance: 'high',
      priority: 'high',
    });
  },

  /**
   * Update progress (with optional throttling)
   */
  async updateProgress({ id, title, progress, step = 5 }) {
    if (!(await this.ensurePermissions())) return;

    const normId = normalizeId(id);
    const prev = lastProgressValue[normId] || 0;

    // Avoid sending too frequent notifications
    if (Math.abs(progress - prev) < step && progress < 100) return;
    lastProgressValue[normId] = progress;

    await  PushNotification.localNotification({
      id: normId,
      channelId: CHANNEL_ID,
      title: title || 'Uploading...',
      message: `Progress: ${progress}%`,
      ongoing: progress < 100,
      importance: 'high',
      priority: 'high',
    });
  },

  /**
   * Show success message
   */
  async showSuccess({ id, title, message }) {
    if (!(await this.ensurePermissions())) return;

    await PushNotification.localNotification({
      id: normalizeId(id),
      channelId: CHANNEL_ID,
      title: title || 'Success',
      message: message || 'Upload completed!',
      ongoing: false,
      importance: 'high',
      priority: 'high',
    });
    delete lastProgressValue[normalizeId(id)];
  },

  /**
   * Show error message
   */
  async showError({ id, title, message }) {
    if (!(await this.ensurePermissions())) return;

    await PushNotification.localNotification({
      id: normalizeId(id),
      channelId: CHANNEL_ID,
      title: title || 'Error',
      message: message || 'Something went wrong.',
      ongoing: false,
      importance: 'high',
      priority: 'high',
    });
    delete lastProgressValue[normalizeId(id)];
  },

  /**
   * Send a custom notification
   */
  async sendMessage({ id, title, message, ongoing = false }) {
    if (!(await this.ensurePermissions())) return;

    await PushNotification.localNotification({
      id: normalizeId(id),
      channelId: CHANNEL_ID,
      title: title || 'Notification',
      message: message || '',
      ongoing,
      importance: 'high',
      priority: 'high',
      vibrate: true,
      vibration: 300,
      playSound: true,
      soundName: 'default',
    });
  },

  /**
   * Cancel notification manually
   */
  cancel(id) {
    PushNotification.cancelLocalNotifications({ id: normalizeId(id) });
    delete lastProgressValue[normalizeId(id)];
  },
};

export default Notification;
