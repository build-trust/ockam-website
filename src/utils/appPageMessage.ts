import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import RemarkGFM from 'remark-gfm';
import RemarkPrism from 'remark-prism';

import { AllPageMessage } from '@root/components/AllPageNotice';
import CONFIG from '@config';

const mdxSerialize = async (content: string): Promise<MDXRemoteSerializeResult> => {
  const result = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [RemarkGFM, RemarkPrism],
    },
  });
  return result;
};

const allPageMessage: Promise<AllPageMessage | null> = new Promise((resolve) => {
  const msgConfig = CONFIG.allPageMessage as
    | null
    | undefined
    | { message: string; except: string | string[] };
  if (!msgConfig) {
    resolve(null);
  } else if (!msgConfig.message) {
    resolve(null);
  } else {
    mdxSerialize(msgConfig.message).then((msg) => {
      const data: AllPageMessage = { message: msg };
      if (Object.hasOwn(CONFIG.allPageMessage, 'except')) data.except = msgConfig.except;
      resolve(data);
    });
  }
});

export type { AllPageMessage };
export { mdxSerialize };
export default allPageMessage;
