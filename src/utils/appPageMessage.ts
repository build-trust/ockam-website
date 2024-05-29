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
  if (CONFIG.allPageMessage && CONFIG.allPageMessage.message) {
    mdxSerialize(CONFIG.allPageMessage?.message).then((msg) => {
      resolve({
        message: msg,
        except: CONFIG.allPageMessage?.except,
      });
    });
  } else {
    resolve(null);
  }
});

export type { AllPageMessage };
export default allPageMessage;
