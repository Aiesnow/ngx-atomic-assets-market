import { TestBed } from '@angular/core/testing';

import { AtomicAssetsMarketService } from './atomic-assets-market.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {
  AssetLog,
  Auction, Collection,
  Config,
  ListingAsset,
  ListingOffer,
  ListingTransfer,
  Marketplace,
  Sale
} from "./atomic-asset";
import {
  asset,
  assetLog,
  auction, collection,
  config,
  getResult,
  marketplace,
  offer,
  sale,
  transfer
} from "../test/atomic-asset.mock";
import {ATOMIC_ASSETS_MARKET_CONFIG} from "./atomic-assets.config";

describe('AtomicAssetsService', () => {
  let service: AtomicAssetsMarketService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: ATOMIC_ASSETS_MARKET_CONFIG,
          useValue: '',
        }
      ]
    });
    service = TestBed.inject(AtomicAssetsMarketService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getAuctions', () => {
    service.getAuctions().subscribe((result: Auction[]) => {
      expect(result).toEqual([
        auction
      ]);
    });
    const mockReq = httpMock.expectOne('/v1/auctions');
    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.responseType).toEqual('json');
    mockReq.flush(getResult(auction, true));
  });

  it('should call getAuctionById', () => {
    service.getAuctionById(125).subscribe((result: Auction) => {
      expect(result).toEqual(auction);
    });
    const mockReq = httpMock.expectOne('/v1/auctions/125');
    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.responseType).toEqual('json');
    mockReq.flush(getResult(auction));
  });

  it('should call getSales', () => {
    service.getSales().subscribe((result: Sale[]) => {
      expect(result).toEqual([
        sale
      ]);
    });
    const mockReq = httpMock.expectOne('/v1/sales');
    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.responseType).toEqual('json');
    mockReq.flush(getResult(sale, true));
  });

  it('should call getSaleById', () => {
    service.getSaleById(125).subscribe((result: Sale) => {
      expect(result).toEqual(sale);
    });
    const mockReq = httpMock.expectOne('/v1/sales/125');
    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.responseType).toEqual('json');
    mockReq.flush(getResult(sale));
  });

  it('should call getMarketplaces', () => {
    service.getMarketplaces().subscribe((result: Marketplace[]) => {
      expect(result).toEqual([
        marketplace
      ]);
    });
    const mockReq = httpMock.expectOne('/v1/marketplaces');
    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.responseType).toEqual('json');
    mockReq.flush(getResult(marketplace, true));
  });

  it('should call getMarketplacesByName', () => {
    service.getMarketplaceByName('marketplaceName').subscribe((result: Marketplace) => {
      expect(result).toEqual(marketplace);
    });
    const mockReq = httpMock.expectOne('/v1/marketplaces/marketplaceName');
    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.responseType).toEqual('json');
    mockReq.flush(getResult(marketplace));
  });

  it('should call getAssets', () => {
    service.getAssets().subscribe((result: ListingAsset[]) => {
      expect(result).toEqual([
        asset
      ]);
    });
    const mockReq = httpMock.expectOne('/v1/assets');
    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.responseType).toEqual('json');
    mockReq.flush(getResult(asset, true));
  });

  it('should call getAssetById', () => {
    service.getAssetById('assetId').subscribe((result: ListingAsset) => {
      expect(result).toEqual(asset);
    });
    const mockReq = httpMock.expectOne('/v1/assets/assetId');
    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.responseType).toEqual('json');
    mockReq.flush(getResult(asset));
  });

  it('should call getAssetById', () => {
    service.getAssetLogs('assetId').subscribe((result: AssetLog[]) => {
      expect(result).toEqual([assetLog]);
    });
    const mockReq = httpMock.expectOne('/v1/assets/assetId/logs');
    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.responseType).toEqual('json');
    mockReq.flush(getResult(assetLog, true));
  });

  it('should call getTransfers', () => {
    service.getTransfers().subscribe((result: ListingTransfer[]) => {
      expect(result).toEqual([
        transfer
      ]);
    });
    const mockReq = httpMock.expectOne('/v1/transfers');
    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.responseType).toEqual('json');
    mockReq.flush(getResult(transfer, true));
  });

  it('should call getOffers', () => {
    service.getOffers().subscribe((result: ListingOffer[]) => {
      expect(result).toEqual([
        offer
      ]);
    });
    const mockReq = httpMock.expectOne('/v1/offers');
    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.responseType).toEqual('json');
    mockReq.flush(getResult(offer, true));
  });

  it('should call getOfferById', () => {
    service.getOfferById('offerId').subscribe((result: ListingOffer) => {
      expect(result).toEqual(offer);
    });
    const mockReq = httpMock.expectOne('/v1/offers/offerId');
    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.responseType).toEqual('json');
    mockReq.flush(getResult(offer));
  });

  it('should call getConfig', () => {
    service.getConfig().subscribe((result: Config) => {
      expect(result).toEqual(config);
    });
    const mockReq = httpMock.expectOne('/v1/config');
    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.responseType).toEqual('json');
    mockReq.flush(getResult(config));
  });

  it('should call getBlacklistedCollections', () => {
    service.getBlacklistedCollections().subscribe((result: Collection[]) => {
      expect(result).toEqual([collection]);
    });
    const mockReq = httpMock.expectOne('/v1/blacklist/collections');
    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.responseType).toEqual('json');
    mockReq.flush(getResult(collection, true));
  });

  it('should call blacklistCollection', () => {
    service.blacklistCollection('collectionName').subscribe((result: boolean) => {
      expect(result).toEqual(true);
    });
    const mockReq = httpMock.expectOne('/v1/blacklist/collections');
    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.body).toEqual({collection_name: 'collectionName'});
    expect(mockReq.request.method).toBe('PUT');
    expect(mockReq.request.responseType).toEqual('json');
    mockReq.flush(getResult({}));
  });

  it('should call removeBlacklistedCollection', () => {
    service.removeBlacklistedCollection('collectionName').subscribe((result: boolean) => {
      expect(result).toEqual(true);
    });
    const mockReq = httpMock.expectOne('/v1/blacklist/collections/collectionName');
    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.method).toBe('DELETE');
    expect(mockReq.request.responseType).toEqual('json');
    mockReq.flush(getResult({}));
  });

  it('should call getWhitelistedCollections', () => {
    service.getWhitelistedCollections().subscribe((result: Collection[]) => {
      expect(result).toEqual([collection]);
    });
    const mockReq = httpMock.expectOne('/v1/whitelist/collections');
    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.responseType).toEqual('json');
    mockReq.flush(getResult(collection, true));
  });

  it('should call whitelistCollection', () => {
    service.whitelistCollection('collectionName').subscribe((result: boolean) => {
      expect(result).toEqual(true);
    });
    const mockReq = httpMock.expectOne('/v1/whitelist/collections');
    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.body).toEqual({collection_name: 'collectionName'});
    expect(mockReq.request.method).toBe('PUT');
    expect(mockReq.request.responseType).toEqual('json');
    mockReq.flush(getResult({}));
  });

  it('should call removeWhitelistedCollection', () => {
    service.removeWhitelistedCollection('collectionName').subscribe((result: boolean) => {
      expect(result).toEqual(true);
    });
    const mockReq = httpMock.expectOne('/v1/whitelist/collections/collectionName');
    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.method).toBe('DELETE');
    expect(mockReq.request.responseType).toEqual('json');
    mockReq.flush(getResult({}));
  });

  it('should call getBlacklistedAccounts', () => {
    service.getBlacklistedAccounts().subscribe((result: string[]) => {
      expect(result).toEqual(['account']);
    });
    const mockReq = httpMock.expectOne('/v1/blacklist/accounts');
    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.responseType).toEqual('json');
    mockReq.flush(getResult('account', true));
  });

  it('should call blacklistAccount', () => {
    service.blacklistAccount('accountName').subscribe((result: boolean) => {
      expect(result).toEqual(true);
    });
    const mockReq = httpMock.expectOne('/v1/blacklist/accounts');
    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.body).toEqual({account: 'accountName'});
    expect(mockReq.request.method).toBe('PUT');
    expect(mockReq.request.responseType).toEqual('json');
    mockReq.flush(getResult({}));
  });

  it('should call removeBlacklistedAccount', () => {
    service.removeBlacklistedAccount('collectionName').subscribe((result: boolean) => {
      expect(result).toEqual(true);
    });
    const mockReq = httpMock.expectOne('/v1/blacklist/accounts/collectionName');
    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.method).toBe('DELETE');
    expect(mockReq.request.responseType).toEqual('json');
    mockReq.flush(getResult({}));
  });

  it('should call getWhitelistedAccounts', () => {
    service.getWhitelistedAccounts().subscribe((result: string[]) => {
      expect(result).toEqual(['account']);
    });
    const mockReq = httpMock.expectOne('/v1/whitelist/accounts');
    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.responseType).toEqual('json');
    mockReq.flush(getResult('account', true));
  });

  it('should call whitelistAccount', () => {
    service.whitelistAccount('accountName').subscribe((result: boolean) => {
      expect(result).toEqual(true);
    });
    const mockReq = httpMock.expectOne('/v1/whitelist/accounts');
    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.body).toEqual({account: 'accountName'});
    expect(mockReq.request.method).toBe('PUT');
    expect(mockReq.request.responseType).toEqual('json');
    mockReq.flush(getResult({}));
  });

  it('should call removeWhitelistedAccount', () => {
    service.removeWhitelistedAccount('collectionName').subscribe((result: boolean) => {
      expect(result).toEqual(true);
    });
    const mockReq = httpMock.expectOne('/v1/whitelist/accounts/collectionName');
    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.method).toBe('DELETE');
    expect(mockReq.request.responseType).toEqual('json');
    mockReq.flush(getResult({}));
  });
});
