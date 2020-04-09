<<<<<<< Updated upstream
import { Component, Input } from '@angular/core';
=======
import { Component ,Input} from '@angular/core';
>>>>>>> Stashed changes

@Component({
  selector: 'mw-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent {
<<<<<<< Updated upstream
  @Input() mediaItem;

=======

  @Input('mediaItemToWatch') mediaItem;
  
>>>>>>> Stashed changes
  onDelete() {
    console.log('deleted');
  }
}
