import Colors from '../constants/Colors';
import Constants from '../constants/Constants';

export const appThemeConfiguration = (Theme) => {
    const themeColors = {
        [Constants.ThemeOne]: {
            AppPrimaryColor: Colors.AppPrimaryColor,
            AppSecondaryColor: Colors.SecondaryColorOne,
        },
        [Constants.ThemeTwo]: {
            AppPrimaryColor: "#888888", // Corrected hex value
            AppSecondaryColor: "#555555", // Example secondary color
        },
        [Constants.ThemeThree]: {
            AppPrimaryColor: "#188988", // Corrected hex value
            AppSecondaryColor: "#166666", // Example secondary color
        }
    };

    return themeColors[Theme] || {
        AppPrimaryColor: Colors.AppPrimaryColor,
        AppSecondaryColor: Colors.DefaultSecondaryColor,
    };
};
