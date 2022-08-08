import { CONTACT_PAGE_PATH } from '@consts/paths';

const getRootUrl = (): string => {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'production')
    return process.env.NEXT_PUBLIC_SITE_URL || 'missing NEXT_PUBLIC_SITE_URL env';

  return process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : 'http://localhost:3001';
};

export default {
  app: {
    title: 'Ockam | Build Trust',
    description: `Modern applications are distributed, interconnected, and have Zero-Trust in network boundaries. These applications must exchange data with Trust. Ockam empowers developers to build applications that can Trust Data-in-Motion across complex, variable, and hostile networks. Ockam has a simple developer experience and powerful primitives that orchestrate end-to-end encryption, key management, authorization policy enforcement, and mutual authentication.`,
    rootUrl: getRootUrl(),
    recaptchaSiteKey:
      process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY || '6LfIDtwUAAAAAIt2vgTj7LTIJ9tqwlNKV4fZecbK',
  },
  salesforce: {
    oid: '00D4T000000FcUg',
    actionUrl: 'https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8',
    returnUrl: `${getRootUrl()}${CONTACT_PAGE_PATH}`,
  },
  lever: {
    siteName: 'ockam',
    apiUrl: 'https://api.lever.co/v0',
  },
  github: {
    ownerName: 'build-trust',
    apiUrl: 'https://api.github.com',
  },
  crates: {
    apiUrl: 'https://crates.io/api/v1',
    projectsNames: [
      'ockam',
      'ockam_macros',
      'ockam_core',
      'ockam_vault',
      'ockam_signature_core',
      'ockam_transport_websocket',
      'ockam_signature_bls',
      'ockam_vault_test_suite',
      'ockam_node',
      'ockam_signature_bbs',
      'ockam_vault_core',
      'ockam_node_attribute',
      'ockam_executor',
      'ockam_key_exchange_xx',
      'ockam_key_exchange_core',
      'ockam_key_exchange_x3dh',
      'ockam_transport_tcp',
      'ockam-ffi',
      'ockam_transport_core',
      'ockam_credential',
      'ockam_entity',
      'ockam_identity',
      'ockam_node_no_std',
      'ockam_transport_ble',
      'ockam_vault_test_attribute',
      'ockam_node_test_attribute',
      'ockam_examples',
      'ockam_vault_sync_core',
      'ockam_channel',
      'ockam_message_derive',
      'ockam_macro',
      'ockam_api',
      'ockam_multiaddr',
      'signature_core',
      'signature_bbs_plus',
      'signature_bls',
      'signature_ps',
    ],
  },
};
