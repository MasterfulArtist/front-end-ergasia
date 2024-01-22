import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ProductService} from "../services/product.service";
import {AccountService} from "../services/account.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  accounts=new MatTableDataSource<any>();
  displayedcolumns:string[]= ['userName','email','role','DeleteButton'];

  constructor(private accountService: AccountService,
              private router:Router) {

  }

  ngOnInit(): void {
    this.accountService.getFarmerAccounts().subscribe(

      responseFarmers => {

        console.log(responseFarmers);

        let responseWithRoleFarmers = responseFarmers.map((item: any)=>({...item, role:"Farmer"}));

        this.accountService.getSupervisorAccounts().subscribe(

          responseSupervisors => {

            let responseWithRoleSupervisors = responseSupervisors.map((item: any)=>({...item, role:"Supervisor"}));
            let concutTable = [...responseWithRoleFarmers,...responseWithRoleSupervisors]

            this.accounts = new MatTableDataSource<any>(concutTable);


          },
          error => {

          }

        )


      },
      error=> {

        console.log(error);

      }

    );



  }

  deleteAccount(id:number) {

  }

  gotoCreate() {

    this.router.navigate(["/account-create"])


  }
}
