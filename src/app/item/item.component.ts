import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from "../item"; 

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent {
// When you use a property in template, you must declare in class 
  editable = false; 

  @Input() item!: Item;
  @Input() newItem!: string; 
  // output has to be eventemitter so component can raise event when data is ready to share
  @Output() remove = new EventEmitter<Item>(); 

  saveItem(description: string) {
    if (!description) return;
    this.editable = false; 
    this.item.description = description; 
  }
}
