import { ArgType, NativeFunction } from "forgescript"
import { ForgeCanvas } from ".."
import { CanvasBuilder } from "../classes"
import { GlobalFonts } from "@napi-rs/canvas"

export default new NativeFunction({
    name: "$fillText",
    version: "1.0.0",
    description: "Draws text in provided canvas.",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "canvas",
            description: "The name of canvas to draw text on.",
            rest: false,
            type: ArgType.String,
            required: true
        },
        {
            name: "text",
            description: "The text to draw.",
            rest: false,
            type: ArgType.String,
            required: true
        },
        {
            name: "x",
            description: "The X position of text.",
            rest: false,
            type: ArgType.Number,
            required: true
        },
        {
            name: "y",
            description: "The Y position of text.",
            rest: false,
            type: ArgType.Number,
            required: true
        },
        {
            name: "font",
            description: "The text font.",
            rest: false,
            type: ArgType.String,
            required: true
        },
        {
            name: "color",
            description: "The text color.",
            rest: false,
            type: ArgType.Color,
            required: true
        }
    ],
    execute(_ctx, [canvas, text, x, y, font, color]) {
        if (!ForgeCanvas.canvases || !ForgeCanvas.canvases[canvas] || !(ForgeCanvas.canvases[canvas] instanceof CanvasBuilder))
          return this.customError("No canvas with provided name.");

        ForgeCanvas.canvases[canvas].fillText(text, x, y, font, color)
        return this.success()
    },
})