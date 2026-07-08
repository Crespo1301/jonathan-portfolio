import { ImageResponse } from "next/og";
import { designs } from "../designs";

// Renders a single icon candidate as a 256x256 PNG at /icon-lab/<n>.
export async function GET(
  _req: Request,
  ctx: { params: Promise<{ n: string }> },
) {
  const { n } = await ctx.params;
  const design = designs.find((d) => d.id === Number(n));
  if (!design) {
    return new Response("Not found", { status: 404 });
  }
  return new ImageResponse(design.render(256), { width: 256, height: 256 });
}
