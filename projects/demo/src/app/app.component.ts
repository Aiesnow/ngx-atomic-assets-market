import {Component, OnInit} from '@angular/core';
import {AtomicAssetsMarketService} from "../../../ng-atomic-assets/src/lib/atomic-assets-market.service";
import {NEVER, Observable} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";
import {
  AssetSort,
  AuctionSort,
  AuctionState, OfferSort, OfferState,
  SaleSort,
  SortOrder, TransferSort
} from "../../../ng-atomic-assets/src/lib/atomic-asset";
import {MatChipInputEvent} from "@angular/material/chips";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'demo';
  result$: Observable<any>;
  auctionParamsForm: FormGroup;
  saleParamsForm: FormGroup;
  assetParamsForm: FormGroup;
  assetHistoryParamsForm: FormGroup;
  transferParamsForm: FormGroup;
  offerParamsForm: FormGroup;
  sortOrders = [
    {
      value: SortOrder.Asc,
      viewValue: 'Asc',
    },
    {
      value: SortOrder.Desc,
      viewValue: 'Desc',
    },
  ];
  auctionStates = [
    {
      value: AuctionState.Canceled,
      viewValue: 'Canceled',
    },
    {
      value: AuctionState.Invalid,
      viewValue: 'Invalid',
    },
    {
      value: AuctionState.Listed,
      viewValue: 'Listed',
    },
    {
      value: AuctionState.Sold,
      viewValue: 'Sold',
    },
    {
      value: AuctionState.Waiting,
      viewValue: 'Waiting',
    },
  ];
  offerStates = [
    {
      value: OfferState.Accepted,
      viewValue: 'Accepted',
    },
    {
      value: OfferState.Invalid,
      viewValue: 'Invalid',
    },
    {
      value: OfferState.Canceled,
      viewValue: 'Canceled',
    },
    {
      value: OfferState.Declined,
      viewValue: 'Decline',
    },
    {
      value: OfferState.Pending,
      viewValue: 'Pending',
    },
    {
      value: OfferState.Unknown,
      viewValue: 'Unknown',
    },
  ];
  auctionSorts = [
    {
      value: AuctionSort.Created,
      viewValue: 'Creation date',
    },
    {
      value: AuctionSort.AuctionId,
      viewValue: 'Auction ID',
    },
    {
      value: AuctionSort.Ending,
      viewValue: 'Ending date',
    },
    {
      value: AuctionSort.Price,
      viewValue: 'Price',
    },
  ];
  saleSorts = [
    {
      value: SaleSort.Created,
      viewValue: 'Creation date',
    },
    {
      value: SaleSort.SaleId,
      viewValue: 'Sale ID',
    },
    {
      value: SaleSort.Price,
      viewValue: 'Price',
    },
  ];
  assetSorts = [
    {
      value: AssetSort.Minted,
      viewValue: 'Mint date',
    },
    {
      value: AssetSort.AssetId,
      viewValue: 'Asset ID',
    },
    {
      value: AssetSort.Updated,
      viewValue: 'Update date',
    },
  ];
  transferSorts = [
    {
      value: TransferSort.Created,
      viewValue: 'Created',
    },
  ];
  offerSorts = [
    {
      value: OfferSort.Created,
      viewValue: 'Created',
    },
  ];
  constructor(public marketService: AtomicAssetsMarketService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.result$ = NEVER;
    this.auctionParamsForm = this.createSaleParamsForm();
    this.saleParamsForm = this.createSaleParamsForm();
    this.assetParamsForm = this.createAssetParamsForm();
    this.assetHistoryParamsForm = this.createAssetHistoryParamsForm();
    this.transferParamsForm = this.createTransferParamsForm();
    this.offerParamsForm = this.createOfferParamsForm();
  }

  createSaleParamsForm() {
    return this.formBuilder.group({
      state: this.formBuilder.control(null),
      max_assets: this.formBuilder.control(null),
      show_blacklisted: this.formBuilder.control(false),
      whitelisted_collections_only: this.formBuilder.control(false),
      whitelisted_seller_only: this.formBuilder.control(false),
      whitelisted_only: this.formBuilder.control(false),
      marketplace: this.formBuilder.control([]),
      maker_marketplace: this.formBuilder.control([]),
      taker_marketplace: this.formBuilder.control([]),
      symbol: this.formBuilder.control(''),
      seller: this.formBuilder.control([]),
      buyer: this.formBuilder.control([]),
      min_price: this.formBuilder.control(null),
      max_price: this.formBuilder.control(null),
      owner: this.formBuilder.control(null),
      collection_name: this.formBuilder.control(null),
      schema_name: this.formBuilder.control(null),
      template_id: this.formBuilder.control(null),
      match: this.formBuilder.control(null),
      sort: this.formBuilder.control(AuctionSort.Created),
      page: this.formBuilder.control(1),
      limit: this.formBuilder.control(100),
      order: this.formBuilder.control('desc'),
    });
  }

  createAssetParamsForm() {
    return this.formBuilder.group({
      owner: this.formBuilder.control(null),
      collection_name: this.formBuilder.control(null),
      schema_name: this.formBuilder.control(null),
      template_id: this.formBuilder.control(null),
      authorized_account: this.formBuilder.control(null),
      match: this.formBuilder.control(null),
      sort: this.formBuilder.control(AuctionSort.Created),
      page: this.formBuilder.control(1),
      limit: this.formBuilder.control(100),
      order: this.formBuilder.control('desc'),
    });
  }

  createAssetHistoryParamsForm() {
    return this.formBuilder.group({
      page: this.formBuilder.control(1),
      limit: this.formBuilder.control(100),
      order: this.formBuilder.control('desc'),
    });
  }

  createTransferParamsForm() {
    return this.formBuilder.group({
      account: this.formBuilder.control([]),
      sender: this.formBuilder.control([]),
      recipient: this.formBuilder.control([]),
      asset_id: this.formBuilder.control([]),
      sort: this.formBuilder.control(AuctionSort.Created),
      page: this.formBuilder.control(1),
      limit: this.formBuilder.control(100),
      order: this.formBuilder.control('desc'),
    });
  }

  createOfferParamsForm() {
    return this.formBuilder.group({
      account: this.formBuilder.control([]),
      sender: this.formBuilder.control([]),
      recipient: this.formBuilder.control([]),
      state: this.formBuilder.control([]),
      is_recipient_contract: this.formBuilder.control(false),
      asset_id: this.formBuilder.control([]),
      sort: this.formBuilder.control(AuctionSort.Created),
      page: this.formBuilder.control(1),
      limit: this.formBuilder.control(100),
      order: this.formBuilder.control('desc'),
    });
  }

  addChip(form, formControlName: string, event: MatChipInputEvent) {
    if((event.value || '').trim()) {
      form.get(formControlName).value.push(event.value);
    }
    event.input.value = '';
  }

  removeChip(form, formControlName: string, value) {
    const index = form.get(formControlName).value.indexOf(value);

    if (index >= 0) {
      form.get(formControlName).value.splice(index, 1);
    }
  }

  getAuctions() {
    this.result$ = this.marketService.getAuctions(this.auctionParamsForm.getRawValue());
  }

  getAuctionById(auctionId) {
    this.result$ = this.marketService.getAuctionById(auctionId);
  }

  getSales() {
    this.result$ = this.marketService.getSales(this.saleParamsForm.getRawValue());
  }

  getSaleById(saleId) {
    this.result$ = this.marketService.getSaleById(saleId);
  }

  getMarketplaces() {
    this.result$ = this.marketService.getMarketplaces();
  }

  getMarketplaceByName(marketplaceName) {
    this.result$ = this.marketService.getMarketplaceByName(marketplaceName);
  }

  getAssets() {
    console.log(this.assetParamsForm.getRawValue());
    this.result$ = this.marketService.getAssets(this.assetParamsForm.getRawValue());
  }

  getAssetById(assetId: string) {
    this.result$ = this.marketService.getAssetById(assetId);
  }

  getAssetHistory(assetId: string) {
    this.result$ = this.marketService.getAssetLogs(assetId);
  }

  getTransfers() {
    this.result$ = this.marketService.getTransfers(this.transferParamsForm.getRawValue());
  }

  getOffers() {
    this.result$ = this.marketService.getOffers(this.offerParamsForm.getRawValue());
  }

  getOfferById(assetId: string) {
    this.result$ = this.marketService.getOfferById(assetId);
  }

  getConfig() {
    this.result$ = this.marketService.getConfig();
  }
}
