import NextImage from "next/image";
import { chakra } from "@chakra-ui/react";

const Image = chakra(NextImage, {
  baseStyle: { flexShrink: 0 },
  shouldForwardProp: (prop) =>
    [
      "width",
      "height",
      "src",
      "alt",
      "quality",
      "placeholder",
      "blurDataURL",
      "loader ",
      "layout",
    ].includes(prop),
});

export default Image;
