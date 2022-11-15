async function copyTextToClipboard(
  text: string,
  setCopied: (value: boolean) => void
): Promise<void> {
  setCopied(true);
  await navigator.clipboard.writeText(text);
  setTimeout(() => {
    setCopied(false);
  }, 1000);
}

export default copyTextToClipboard;
