import {
  AssetLog,
  Auction, Collection,
  Config,
  ListingAsset,
  ListingOffer,
  ListingTransfer,
  Marketplace,
  Sale
} from "../lib/atomic-asset";

export function getResult(data, array = false) {
  return {
    success: true,
    data: array ? [data]: data,
    query_time: 0
  }

}

export const auction: Auction = {
  market_contract: 'string',
  asset_contract: 'string',
  auction_id: 0,
  seller: 'string',
  buyer: 'string',
  price: {
    amount: 0,
    token_precision: 0,
    token_contract: 'string',
    token_symbol: 'string'
  },
  assets: [
    {
      contract: 'string',
      asset_id: 0,
      owner: 'string',
      name: 'string',
      is_transferable: true,
      is_burnable: true,
      collection: {
        collection_name: 'string',
        name: 'string',
        author: 'string',
        allow_notify: true,
        authorized_accounts: [
          'string'
        ],
        notify_accounts: [
          'string'
        ],
        market_fee: 0,
        created_at_block: 0,
        created_at_time: 0
      },
      schema: {
        schema_name: 'string',
        format: [
          {
            name: 'string',
            type: 'string'
          }
        ],
        created_at_block: 0,
        created_at_time: 0
      },
      template: {
        template_id: 0,
        max_supply: 0,
        issued_supply: 0,
        is_transferable: true,
        is_burnable: true,
        immutable_data: {},
        created_at_time: 0,
        created_at_block: 0
      },
      backed_tokens: [
        {
          token_contract: 'string',
          token_symbol: 'string',
          token_precision: 0,
          amount: 0
        }
      ],
      immutable_data: {},
      mutable_data: {},
      data: {},
      burned_at_block: 0,
      burned_at_time: 0,
      updated_at_block: 0,
      updated_at_time: 0,
      minted_at_block: 0,
      minted_at_time: 0
    }
  ],
  bids: [
    {
      number: 0,
      account: 'string',
      amount: 0,
      created_at_block: 0,
      created_at_time: 0,
      txid: 'string'
    }
  ],
  maker_marketplace: 'string',
  taker_marketplace: 'string',
  collection: {
    collection_name: 'string',
    name: 'string',
    author: 'string',
    allow_notify: true,
    authorized_accounts: [
      'string'
    ],
    notify_accounts: [
      'string'
    ],
    market_fee: 0,
    created_at_block: 0,
    created_at_time: 0
  },
  state: 0,
  collection_blacklisted: true,
  collection_whitelisted: true,
  seller_blacklisted: true,
  seller_whitelisted: true,
  end_time: 0,
  updated_at_block: 0,
  updated_at_time: 0,
  created_at_block: 0,
  created_at_time: 0,
  created_at_txid: 'string'
};

export const sale: Sale = {
  market_contract: 'string',
  asset_contract: 'string',
  sale_id: 0,
  seller: 'string',
  buyer: 'string',
  offer_id: 0,
  price: {
    amount: 0,
    token_precision: 0,
    token_contract: 'string',
    token_symbol: 'string'
  },
  listing_symbol: 'string',
  assets: [
    {
      contract: 'string',
      asset_id: 0,
      owner: 'string',
      name: 'string',
      is_transferable: true,
      is_burnable: true,
      collection: {
        collection_name: 'string',
        name: 'string',
        author: 'string',
        allow_notify: true,
        authorized_accounts: [
          'string'
        ],
        notify_accounts: [
          'string'
        ],
        market_fee: 0,
        created_at_block: 0,
        created_at_time: 0
      },
      schema: {
        schema_name: 'string',
        format: [
          {
            name: 'string',
            type: 'string'
          }
        ],
        created_at_block: 0,
        created_at_time: 0
      },
      template: {
        template_id: 0,
        max_supply: 0,
        issued_supply: 0,
        is_transferable: true,
        is_burnable: true,
        immutable_data: {},
        created_at_time: 0,
        created_at_block: 0
      },
      backed_tokens: [
        {
          token_contract: 'string',
          token_symbol: 'string',
          token_precision: 0,
          amount: 0
        }
      ],
      immutable_data: {},
      mutable_data: {},
      data: {},
      burned_at_block: 0,
      burned_at_time: 0,
      updated_at_block: 0,
      updated_at_time: 0,
      minted_at_block: 0,
      minted_at_time: 0
    }
  ],
  maker_marketplace: 'string',
  taker_marketplace: 'string',
  collection: {
    collection_name: 'string',
    name: 'string',
    author: 'string',
    allow_notify: true,
    authorized_accounts: [
      'string'
    ],
    notify_accounts: [
      'string'
    ],
    market_fee: 0,
    created_at_block: 0,
    created_at_time: 0
  },
  sale_state: 0,
  offer_state: 0,
  collection_blacklisted: true,
  collection_whitelisted: true,
  seller_blacklisted: true,
  seller_whitelisted: true,
  updated_at_block: 0,
  updated_at_time: 0,
  created_at_block: 0,
  created_at_time: 0,
  created_at_txid: 'string'
};

export const marketplace: Marketplace = {
  marketplace_name: 'string',
  creator: 'string',
  created_at_block: 0,
  created_at_time: 0
};

export const config: Config = {
  atomicassets_contract: 'string',
  atomicmarket_contract: 'string',
  delphioracle_contract: 'string',
  version: 'string',
  maker_market_fee: 0,
  taker_market_fee: 0,
  maximum_auction_duration: 0,
  minimum_bid_increase: 0,
  supported_tokens: [
    {
      token_contract: 'string',
      token_symbol: 'string',
      token_precision: 0
    }
  ],
  supported_pairs: [
    {
      listing_symbol: 'string',
      settlement_symbol: 'string',
      delphi_pair_name: 'string',
      invert_delphi_pair: true
    }
  ]
};


export const asset: ListingAsset = {
  contract: 'string',
  asset_id: 0,
  owner: 'string',
  name: 'string',
  is_transferable: true,
  is_burnable: true,
  collection: {
    collection_name: 'string',
    name: 'string',
    author: 'string',
    allow_notify: true,
    authorized_accounts: [
      'string'
    ],
    notify_accounts: [
      'string'
    ],
    market_fee: 0,
    created_at_block: 0,
    created_at_time: 0
  },
  schema: {
    schema_name: 'string',
    format: [
      {
        name: 'string',
        type: 'string'
      }
    ],
    created_at_block: 0,
    created_at_time: 0
  },
  template: {
    template_id: 0,
    max_supply: 0,
    issued_supply: 0,
    is_transferable: true,
    is_burnable: true,
    immutable_data: {},
    created_at_time: 0,
    created_at_block: 0
  },
  backed_tokens: [
    {
      token_contract: 'string',
      token_symbol: 'string',
      token_precision: 0,
      amount: 0
    }
  ],
  immutable_data: {},
  mutable_data: {},
  data: {},
  burned_at_block: 0,
  burned_at_time: 0,
  updated_at_block: 0,
  updated_at_time: 0,
  minted_at_block: 0,
  minted_at_time: 0,
  sales: [
    {
      market_contract: 'string',
      sale_id: 0
    }
  ],
  auction: {
    market_contract: 'string',
    auction_id: 0
  }
};

export const assetLog: AssetLog = {
  log_id: 0,
  name: 'string',
  data: {},
  txid: 'string',
  created_at_block: 0,
  created_at_time: 0
};
export const transfer: ListingTransfer = {
  contract: 'string',
  sender_name: 'string',
  recipient_name: 'string',
  memo: 'string',
  assets: [
    {
      contract: 'string',
      asset_id: 0,
      owner: 'string',
      name: 'string',
      is_transferable: true,
      is_burnable: true,
      collection: {
        collection_name: 'string',
        name: 'string',
        author: 'string',
        allow_notify: true,
        authorized_accounts: [
          'string'
        ],
        notify_accounts: [
          'string'
        ],
        market_fee: 0,
        created_at_block: 0,
        created_at_time: 0
      },
      schema: {
        schema_name: 'string',
        format: [
          {
            name: 'string',
            type: 'string'
          }
        ],
        created_at_block: 0,
        created_at_time: 0
      },
      template: {
        template_id: 0,
        max_supply: 0,
        issued_supply: 0,
        is_transferable: true,
        is_burnable: true,
        immutable_data: {},
        created_at_time: 0,
        created_at_block: 0
      },
      backed_tokens: [
        {
          token_contract: 'string',
          token_symbol: 'string',
          token_precision: 0,
          amount: 0
        }
      ],
      immutable_data: {},
      mutable_data: {},
      data: {},
      burned_at_block: 0,
      burned_at_time: 0,
      updated_at_block: 0,
      updated_at_time: 0,
      minted_at_block: 0,
      minted_at_time: 0,
      sales: [
        {
          market_contract: 'string',
          sale_id: 0
        }
      ],
      auction: {
        market_contract: 'string',
        auction_id: 0
      }
    }
  ],
  created_at_block: 0,
  created_at_time: 0
};

export const offer: ListingOffer = {
  contract: 'string',
  offer_id: 'string',
  sender_name: 'string',
  recipient_name: 'string',
  memo: 'string',
  state: 0,
  is_sender_contract: true,
  is_recipient_contract: true,
  sender_assets: [
    {
      contract: 'string',
      asset_id: 0,
      owner: 'string',
      name: 'string',
      is_transferable: true,
      is_burnable: true,
      collection: {
        collection_name: 'string',
        name: 'string',
        author: 'string',
        allow_notify: true,
        authorized_accounts: [
          'string'
        ],
        notify_accounts: [
          'string'
        ],
        market_fee: 0,
        created_at_block: 0,
        created_at_time: 0
      },
      schema: {
        schema_name: 'string',
        format: [
          {
            name: 'string',
            type: 'string'
          }
        ],
        created_at_block: 0,
        created_at_time: 0
      },
      template: {
        template_id: 0,
        max_supply: 0,
        issued_supply: 0,
        is_transferable: true,
        is_burnable: true,
        immutable_data: {},
        created_at_time: 0,
        created_at_block: 0
      },
      backed_tokens: [
        {
          token_contract: 'string',
          token_symbol: 'string',
          token_precision: 0,
          amount: 0
        }
      ],
      immutable_data: {},
      mutable_data: {},
      data: {},
      burned_at_block: 0,
      burned_at_time: 0,
      updated_at_block: 0,
      updated_at_time: 0,
      minted_at_block: 0,
      minted_at_time: 0,
      sales: [
        {
          market_contract: 'string',
          sale_id: 0
        }
      ],
      auction: {
        market_contract: 'string',
        auction_id: 0
      }
    }
  ],
  recipient_assets: [
    {
      contract: 'string',
      asset_id: 0,
      owner: 'string',
      name: 'string',
      is_transferable: true,
      is_burnable: true,
      collection: {
        collection_name: 'string',
        name: 'string',
        author: 'string',
        allow_notify: true,
        authorized_accounts: [
          'string'
        ],
        notify_accounts: [
          'string'
        ],
        market_fee: 0,
        created_at_block: 0,
        created_at_time: 0
      },
      schema: {
        schema_name: 'string',
        format: [
          {
            name: 'string',
            type: 'string'
          }
        ],
        created_at_block: 0,
        created_at_time: 0
      },
      template: {
        template_id: 0,
        max_supply: 0,
        issued_supply: 0,
        is_transferable: true,
        is_burnable: true,
        immutable_data: {},
        created_at_time: 0,
        created_at_block: 0
      },
      backed_tokens: [
        {
          token_contract: 'string',
          token_symbol: 'string',
          token_precision: 0,
          amount: 0
        }
      ],
      immutable_data: {},
      mutable_data: {},
      data: {},
      burned_at_block: 0,
      burned_at_time: 0,
      updated_at_block: 0,
      updated_at_time: 0,
      minted_at_block: 0,
      minted_at_time: 0,
      sales: [
        {
          market_contract: 'string',
          sale_id: 0
        }
      ],
      auction: {
        market_contract: 'string',
        auction_id: 0
      }
    }
  ],
  updated_at_block: 0,
  updated_at_time: 0,
  created_at_block: 0,
  created_at_time: 0
};

export const collection: Collection = {
  collection_name: 'string',
  name: 'string',
  author: 'string',
  allow_notify: true,
  authorized_accounts: [
   'string'
  ],
  notify_accounts: [
   'string'
  ],
  market_fee: 0,
  created_at_block: 0,
  created_at_time: 0
};
