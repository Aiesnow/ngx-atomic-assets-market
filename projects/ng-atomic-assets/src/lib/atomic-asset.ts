export interface APIResult<T> {
  success: boolean;
  data: T;
  query_time: number;
}

export enum AuctionState {
  Waiting,
  Listed,
  Canceled,
  Sold,
  Invalid
}

export enum SaleState {
  Waiting,
  Listed,
  Canceled,
  Sold,
  Invalid
}

export enum OfferState {
  Pending,
  Invalid,
  Unknown,
  Accepted,
  Declined,
  Canceled
}

export interface Sale {
  market_contract: string;
  asset_contract: string;
  sale_id: number;
  seller: string;
  buyer: string;
  offer_id: number;
  price: Price;
  listing_symbol: string;
  assets: Asset[];
  maker_marketplace: string;
  taker_marketplace: string;
  collection: Collection;
  sale_state: SaleState;
  offer_state: OfferState;
  collection_blacklisted: boolean;
  collection_whitelisted: boolean;
  seller_blacklisted: boolean;
  seller_whitelisted: boolean;
  updated_at_block: number;
  updated_at_time: number;
  created_at_block: number;
  created_at_time: number;
  created_at_txid: string;
}

export interface Marketplace extends BlockChainObject {
  marketplace_name: string;
  creator: string;
}

export interface Pair {
  listing_symbol: string;
  settlement_symbol: string;
  delphi_pair_name: string;
  invert_delphi_pair: boolean;
}

export interface Config {
  atomicassets_contract: string;
  atomicmarket_contract: string;
  delphioracle_contract: string;
  version: string;
  maker_market_fee: number;
  taker_market_fee: number;
  maximum_auction_duration: number,
  minimum_bid_increase: number;
  supported_tokens: Token[];
  supported_pairs: Pair[];
}

export interface Auction {
  market_contract: string;
  asset_contract: string;
  auction_id: number;
  seller: string;
  buyer: string;
  price: Price;
  assets: Asset[];
  bids: Bid[];
  maker_marketplace: string;
  taker_marketplace: string;
  collection: Collection;
  state: AuctionState;
  collection_blacklisted: boolean;
  collection_whitelisted: boolean;
  seller_blacklisted: boolean;
  seller_whitelisted: boolean;
  end_time: number;
  updated_at_block: number;
  updated_at_time: number;
  created_at_block: number;
  created_at_time: number;
  created_at_txid: string;
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export enum AuctionSort {
  Created = 'created',
  Ending = 'ending',
  AuctionId = 'auction_id',
  Price = 'price',
}

export enum SaleSort {
  Created = 'created',
  SaleId = 'sale_id',
  Price = 'price',
}

export enum AssetSort {
  AssetId = 'asset_id',
  Minted = 'minted',
  Updated = 'updated'
}

export enum TransferSort {
  Created = 'created',
}

export enum OfferSort {
  Created = 'created',
}

export interface AuctionParams extends SearchParams {
  state?: AuctionState[];
  max_assets?: number;
  show_blacklisted?: boolean;
  whitelisted_seller_only?: boolean;
  whitelisted_collections_only?: boolean;
  whitelisted_only?: boolean;
  marketplace?: string[];
  maker_marketplace?: string[];
  taker_marketplace?: string[];
  symbol?: string;
  seller?: string[];
  buyer?: string[];
  min_price?: number;
  max_price?: number;
  owner?: string;
  collection_name?: string;
  schema_name?: string;
  template_id?: number;
  match?: string;
  sort?: AuctionSort;
}

export interface SaleParams extends SearchParams {
  state?: SaleState[];
  max_assets?: number;
  show_blacklisted?: boolean;
  whitelisted_seller_only?: boolean;
  whitelisted_collections_only?: boolean;
  whitelisted_only?: boolean;
  marketplace?: string[];
  maker_marketplace?: string[];
  taker_marketplace?: string[];
  symbol?: string;
  seller?: string[];
  buyer?: string[];
  min_price?: number;
  max_price?: number;
  owner?: string;
  collection_name?: string;
  schema_name?: string;
  template_id?: number;
  match?: string;
  sort?: SaleSort;
}

export interface AssetParams extends SearchParams {
  owner?: string;
  collection_name?: string;
  schema_name?: string;
  template_id?: number;
  authorized_account?: string;
  match?: string;
  sort?: AssetSort;
}

export interface OfferParams extends SearchParams {
  account?: string[];
  sender?: string[];
  recipient?: string[];
  state?: OfferState[];
  is_recipient_contract?: boolean;
  asset_id?: string[];
  sort?: OfferSort;
}

export interface TransferParams extends SearchParams {
  account?: string[];
  sender?: string[];
  recipient?: string[];
  asset_id?: string[];
  sort?: TransferSort;
}

export interface SearchParams {
  page?: number;
  limit?: number;
  order?: SortOrder;
}

export interface Token {
  token_precision: number;
  token_contract: string;
  token_symbol: string;
}

export interface Price extends Token {
  amount: number;
}

export interface ListingAsset extends Asset{
  sales: Pick<Sale, 'market_contract' | 'sale_id'>[];
  auction: Pick<Auction, 'market_contract' | 'auction_id'>;
}

export interface AssetLog extends BlockChainObject {
  log_id: number;
  name: string;
  data: any;
  txid: string;
}

export interface ListingTransfer extends BlockChainObject {
  contract: string;
  sender_name: string;
  recipient_name: string;
  memo: string;
  assets: ListingAsset[];
}

export interface ListingOffer extends BlockChainObject {
  contract: string;
  offer_id: string;
  sender_name: string;
  recipient_name: string;
  memo: string;
  state: OfferState;
  is_sender_contract: boolean;
  is_recipient_contract: boolean;
  sender_assets: ListingAsset[];
  recipient_assets: ListingAsset[];
  updated_at_block: number;
  updated_at_time: number;
}

export interface Asset {
  contract: string;
  asset_id: number;
  owner: string;
  name: string;
  is_transferable: boolean;
  is_burnable: boolean;
  collection: Collection;
  schema: Schema;
  template: Template;
  backed_tokens: Price[];
  immutable_data: any;
  mutable_data: any;
  data: any;
  burned_at_block: number;
  burned_at_time: number;
  updated_at_block: number;
  updated_at_time: number;
  minted_at_block: number;
  minted_at_time: number;
}
export interface Collection extends BlockChainObject {
  collection_name: string;
  name: string;
  author: string;
  allow_notify: boolean;
  authorized_accounts: string[];
  notify_accounts: string[];
  market_fee: number;
}
export interface Schema extends BlockChainObject {
  schema_name: string;
  format: SchemaFormat[];
}
export interface SchemaFormat {
  name: string;
  type: string;
}
export interface Template extends BlockChainObject {
  template_id: number;
  max_supply: number;
  issued_supply: number;
  is_transferable: boolean;
  is_burnable: boolean;
  immutable_data: any;
}
export interface Bid extends BlockChainObject {
  number: number;
  account: string;
  amount: number;
  txid: string;
}
interface BlockChainObject {
  created_at_block: number;
  created_at_time: number;
}
