import { BasicColorSchema } from "@vueuse/core"
import { FunctionalComponent, HTMLAttributes, VNodeProps } from "nuxt/dist/app/compat/capi"
import { TypeBaseSwitchItem } from "~~/types/TypeBaseSwitchItem";
import { IBaseSwitchItem } from "./IBaseSwitchItem"


export class BaseSwitchItem implements IBaseSwitchItem {
    /**
     * Class that acts like a object, which contains information for rendering a Switch component.
     *
     * @remarks
     * This class is a so-called 'model', which purpose is to represent data that is expected (or can be used) for rendering a Switch component.
     *
     * @param TypeBaseSwitchItem - That contains the following ENUMS: ButtonRounding, ButtonSize, ButtonColor
     * @returns The implemented model of a BaseSwitchItem which can be used for rendering a Switch component
     *
     */
    name: string;
    code?: string;
    icon?: FunctionalComponent<HTMLAttributes & VNodeProps, {}>;
    mode?: BasicColorSchema;

    constructor(data: TypeBaseSwitchItem) {
        this.name = data.name;
        this.code = data.code;
        this.icon = data.icon;
        this.mode = data.mode;
    }
}