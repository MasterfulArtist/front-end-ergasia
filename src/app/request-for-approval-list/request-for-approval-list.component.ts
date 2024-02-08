import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {AccountCreateComponent} from "../account-create/account-create.component";
import {AccountService} from "../services/account.service";
import {ProductService} from "../services/product.service";
import {RegionService} from "../services/region.service";
import {RequestForApprovalService} from "../services/request-for-approval.service";

@Component({
  selector: 'app-request-for-approval-create',
  templateUrl: './request-for-approval-create.component.html',
  styleUrls: ['./request-for-approval-create.component.css']
})
export class RequestForApprovalCreateComponent implements OnInit {

  approvalName: string = '';
  approvalDetails: string = '';
  selectedFarmers: any[] = [];
  farmers: any[] = [];
  selectedProducts: any[]=[];
  products: any[] = [];
  selectedRegion: any;
  regions: any[]=[];
  status: number =0;

  constructor(private accountService: AccountService,
              private productService: ProductService,
              private regionService: RegionService,
              private requestForApprovalService: RequestForApprovalService) {
  }


  isDisabled(): boolean {

    if(this.approvalName===''|| this.approvalDetails==='' ||
      (this.selectedFarmers.length===0) || (this.selectedProducts.length===0)
      || (this.selectedRegion===null)){
      return true;
    }
    return false;

  }

  addRequestForApproval() {

    this.requestForApprovalService.postApprovalRequests(this.approvalName,
      this.approvalDetails,this.selectedFarmers,this.selectedProducts,this.selectedRegion, this.status).subscribe(
      response => {

        console.log(response);

      },
      error => {

        console.log(error);

      }
    );


  }
  ngOnInit(): void {

    this.accountService.getFarmerAccounts().subscribe(
      response => {

        console.log(response);
        this.farmers = (response);

      },
      error => {

        console.log(error);

      }
    );

    this.productService.getProducts().subscribe(
      response => {

        console.log(response);
        this.products = (response);

      },
      error => {

        console.log(error);

      }
    );

    this.regionService.getRegions().subscribe(
      response => {

        console.log(response);
        this.regions= (response);

      },
      error => {

        console.log(error);

      }
    );

  }

}

export class RequestForApprovalListComponent {
}
