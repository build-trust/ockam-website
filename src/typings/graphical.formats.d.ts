declare module '*.svg?url' {
  // Done so that it can be loaded by both Next Image component by passing src prop and
  // reading assetName.src for some existing Chakra / CSS backgrounds.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const src: any;
  export default src;
}
