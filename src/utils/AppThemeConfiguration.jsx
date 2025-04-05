import Colors from '../constants/Colors';
import Constants from '../constants/Constants';

export const appThemeConfiguration = (Theme) => {
    const themeColors = {
        [Constants.ThemeOne]: {
            AppPrimaryColor: Colors.AppPrimaryColor,
            AppSecondaryColor: Colors.AppSecondaryColor,
        },
        [Constants.ThemeTwo]: {
            AppPrimaryColor: "#d10404", // Corrected hex value
            AppSecondaryColor: Colors.AppSecondaryColor,
        },
        [Constants.ThemeThree]: {
            AppPrimaryColor: "#008cff", // Corrected hex value
            AppSecondaryColor: Colors.AppSecondaryColor,
        }
    };

    return themeColors[Theme] || {
        AppPrimaryColor: Colors.AppPrimaryColor,
        AppSecondaryColor: Colors.AppSecondaryColor,
    };
};
