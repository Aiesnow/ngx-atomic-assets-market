import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {
  AssetParams,
  Auction,
  AuctionParams,
  Config, ListingAsset, ListingOffer, ListingTransfer, AssetLog,
  Marketplace,
  Sale,
  SaleParams, SearchParams, TransferParams, OfferParams, APIResult, Collection
} from "./atomic-asset";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {ATOMIC_ASSETS_MARKET_CONFIG} from "./atomic-assets.config";

@Injectable({
  providedIn: 'root'
})
export class AtomicAssetsMarketService {

  constructor(private httpClient: HttpClient, @Inject(ATOMIC_ASSETS_MARKET_CONFIG) private url: string) { }

  private static parseParams(params: AuctionParams | SaleParams | SearchParams): Record<string, string> {
    const newParams: Record<string, string> = {}
    for(let key of Object.keys(params)) {
      if(Array.isArray(params[key])) {
        newParams[key] = (params[key] as (string | number)[]).map(elem => elem.toString()).join(',');
      } else {
        newParams[key] = params[key].toString();
      }
    }
    return newParams;
  }

  getAuctions(params: AuctionParams = {}): Observable<Auction[]> {
    return this.httpClient.get<APIResult<Auction[]>>(`${this.url}/v1/auctions`, {params: AtomicAssetsMarketService.parseParams(params)}).pipe(map(result => result.data));
  }

  getAuctionById(auctionId: number): Observable<Auction> {
    return this.httpClient.get<APIResult<Auction>>(`${this.url}/v1/auctions/${auctionId}`).pipe(map(result => result.data));
  }

  getSales(params: SaleParams = {}): Observable<Sale[]> {
    return this.httpClient.get<APIResult<Sale[]>>(`${this.url}/v1/sales`, {params: AtomicAssetsMarketService.parseParams(params)}).pipe(map(result => result.data));
  }

  getSaleById(saleId: number): Observable<Sale> {
    return this.httpClient.get<APIResult<Sale>>(`${this.url}/v1/sales/${saleId}`).pipe(map(result => result.data));
  }

  getMarketplaces(): Observable<Marketplace[]> {
    return this.httpClient.get<APIResult<Marketplace[]>>(`${this.url}/v1/marketplaces`).pipe(map(result => result.data));
  }

  getMarketplaceByName(marketplaceName: string): Observable<Marketplace> {
    return this.httpClient.get<APIResult<Marketplace>>(`${this.url}/v1/marketplaces/${marketplaceName}`).pipe(map(result => result.data));
  }

  getAssets(params: AssetParams = {}): Observable<ListingAsset[]> {
    return this.httpClient.get<APIResult<ListingAsset[]>>(`${this.url}/v1/assets`, {params: AtomicAssetsMarketService.parseParams(params)}).pipe(map(result => result.data));
  }

  getAssetById(assetId: string): Observable<ListingAsset> {
    return this.httpClient.get<APIResult<ListingAsset>>(`${this.url}/v1/assets/${assetId}`).pipe(map(result => result.data));
  }

  getAssetLogs(assetId: string, params: SearchParams = {}): Observable<AssetLog[]> {
    return this.httpClient.get<APIResult<AssetLog[]>>(`${this.url}/v1/assets/${assetId}/logs`, {params: AtomicAssetsMarketService.parseParams(params)}).pipe(map(result => result.data));
  }

  getTransfers(params: TransferParams = {}): Observable<ListingTransfer[]> {
    return this.httpClient.get<APIResult<ListingTransfer[]>>(`${this.url}/v1/transfers`, {params: AtomicAssetsMarketService.parseParams(params)}).pipe(map(result => result.data));
  }

  getOffers(params: OfferParams = {}): Observable<ListingOffer[]> {
    return this.httpClient.get<APIResult<ListingOffer[]>>(`${this.url}/v1/offers`, {params: AtomicAssetsMarketService.parseParams(params)}).pipe(map(result => result.data));
  }

  getOfferById(offerId: string): Observable<ListingOffer> {
    return this.httpClient.get<APIResult<ListingOffer>>(`${this.url}/v1/offers/${offerId}`).pipe(map(result => result.data));
  }

  getConfig(): Observable<Config> {
    return this.httpClient.get<APIResult<Config>>(`${this.url}/v1/config`).pipe(map(result => result.data));
  }

  // ADMIN FUNCTIONS

  getBlacklistedCollections(): Observable<Collection[]> {
    return this.httpClient.get<APIResult<Collection[]>>(`${this.url}/v1/blacklist/collections`).pipe(map(result => result.data));
  }

  blacklistCollection(collectionName: string): Observable<boolean> {
    return this.httpClient.put<APIResult<{}>>(`${this.url}/v1/blacklist/collections`, {collection_name: collectionName}).pipe(map(result => result.success));
  }

  removeBlacklistedCollection(collectionName: string): Observable<boolean> {
    return this.httpClient.delete<APIResult<{}>>(`${this.url}/v1/blacklist/collections/${collectionName}`).pipe(map(result => result.success));
  }

  getWhitelistedCollections(): Observable<Collection[]> {
    return this.httpClient.get<APIResult<Collection[]>>(`${this.url}/v1/whitelist/collections`).pipe(map(result => result.data));
  }

  whitelistCollection(collectionName: string): Observable<boolean> {
    return this.httpClient.put<APIResult<{}>>(`${this.url}/v1/whitelist/collections`, {collection_name: collectionName}).pipe(map(result => result.success));
  }

  removeWhitelistedCollection(collectionName: string): Observable<boolean> {
    return this.httpClient.delete<APIResult<{}>>(`${this.url}/v1/whitelist/collections/${collectionName}`).pipe(map(result => result.success));
  }

  getBlacklistedAccounts(): Observable<string[]> {
    return this.httpClient.get<APIResult<string[]>>(`${this.url}/v1/blacklist/accounts`).pipe(map(result => result.data));
  }

  blacklistAccount(accountName: string): Observable<boolean> {
    return this.httpClient.put<APIResult<{}>>(`${this.url}/v1/blacklist/accounts`, {account: accountName}).pipe(map(result => result.success));
  }

  removeBlacklistedAccount(accountName: string): Observable<boolean> {
    return this.httpClient.delete<APIResult<{}>>(`${this.url}/v1/blacklist/accounts/${accountName}`).pipe(map(result => result.success));
  }

  getWhitelistedAccounts(): Observable<string[]> {
    return this.httpClient.get<APIResult<string[]>>(`${this.url}/v1/whitelist/accounts`).pipe(map(result => result.data));
  }

  whitelistAccount(accountName: string): Observable<boolean> {
    return this.httpClient.put<APIResult<{}>>(`${this.url}/v1/whitelist/accounts`, {account: accountName}).pipe(map(result => result.success));
  }

  removeWhitelistedAccount(accountName: string): Observable<boolean> {
    return this.httpClient.delete<APIResult<{}>>(`${this.url}/v1/whitelist/accounts/${accountName}`).pipe(map(result => result.success));
  }
}
