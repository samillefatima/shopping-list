import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; 
import { ListService } from './list.service';

@Component({
  selector: 'app-item-list',
  standalone: true,
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  imports: [CommonModule, FormsModule]
})
export class ItemListComponent implements OnInit {
  items: { name: string; purchased: boolean }[] = [];
  newItem: string = ''; 
  editedItem: string = ''; 
  editedItemIndex: number | null = null; 

  constructor(private listService: ListService, private router: Router) {}

  ngOnInit(): void {
    this.checkLogin();
  }
 
  checkLogin(): void {
    const token = localStorage.getItem('authToken'); 
    if (!token) {
      this.router.navigate(['/login']); 
    } else {
      this.loadItems(); 
    }
  }


  loadItems(): void {
    this.listService.getShoppingLists().subscribe((data) => {
      this.items = data.map(item => ({
        id: item.id,
        name: item.title,
        purchased: item.included
      }));
    });
  }

  addItem(): void {
    if (this.newItem.trim()) {
      this.items.push({ name: this.newItem.trim(), purchased: false }); 
      this.newItem = '';
    }
  }

  startEdit(index: number): void {
    this.editedItemIndex = index;
    this.editedItem = this.items[index].name; 
  }

  editItem(index: number): void {
    if (this.editedItem.trim()) {
      this.items[index].name = this.editedItem.trim(); 
    }
    this.editedItemIndex = null; 
    this.editedItem = '';
  }

  deleteItem(index: number): void {
    this.items.splice(index, 1);
  }

  moveToPurchased(index: number): void {
    this.items[index].purchased = true;
  }

  togglePurchased(index: number): void {
    this.items[index].purchased = !this.items[index].purchased; 
  }
  
 
}
