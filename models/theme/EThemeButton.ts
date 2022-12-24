export enum ButtonRounding {
    /**
     * This is the ButtonRounding Enum.
     *
     * @remarks
     * This Enum takes care over all the possible Roundings you can use troughout the project.
     *
     * @param none - sharp edges
     * @param half - medium rounded edges
     * @param full - fully roundes edges
     *
     */
    none = "",
    half = "rounded-lg",
    full = "rounded-full",
}

export enum ButtonSize {
    /**
     * This is the ButtonSize Enum.
     *
     * @remarks
     * This Enum takes care over all the possible sizing you can use troughout the project.
     * This means the padding on the X and Y side, but also the font size (which therefor is bound to the button size)
     *
     *
     * @param xxs - extra extra small
     * @param xs - extra small
     * @param s - small
     * @param m - medium
     * @param l - large
     * @param xl - extra large
     * @param cirkel - padding on all 4 sides are equalt which makes this button theme a cirkel
     *
     */
    xxs = "py-1 px-2 text-sm",
    xs = "px-2.5 py-1.5 text-xs",
    s = "px-3 py-2 text-sm",
    m = "px-4 py-2 text-sm",
    l = "px-4 py-2 text-base",
    xl = "px-6 py-3 text-base",
    cirkel = "p-2 text-sm"
}

export enum ButtonColor {
    /**
     * This is the ButtonColor Enum.
     *
     * @remarks
     * This Enum takes care over all the possible color combinations that can be applied to a button.
     * This means that anything related to the borders, background and text color are determined in this part
     *
     * @param transparent - no border & white background, on hover shows light grey background, text color is black.
     * @param white - grey border & white background, on hover tthe border turns darker grey, text color is black.
     * @param black - black color, on hover this turns into grey, text color is white
     * @param mblue - midnight blue color, on hover turns into crayonBlue, text color is white.
     * @param cblue - crayon blue color, on hover turns into midnight blue, text color is white.
     * @param ruby - ruby color, on hover turns into light pink, text color is white
     *
     */
    transparent = "text-slate-700 hover:bg-slate-100 hover:text-slate-900",
    white = "bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white",
    black = "bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white",
    pink = "",
    mblue = "bg-blue-600 text-indigo-700 hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600",
    cblue = "bg-blue-600 text-indigo-700 hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600",
}