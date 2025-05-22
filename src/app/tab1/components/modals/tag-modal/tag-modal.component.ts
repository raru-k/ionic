import { CommonModule } from '@angular/common';
import {
  Component,
  effect,
  inject,
  Input,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { TagService } from 'src/app/tab1/services/tag.service';

@Component({
  selector: 'app-tag-modal',
  templateUrl: './tag-modal.component.html',
  styleUrls: ['./tag-modal.component.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
})
export class TagModalComponent {
  private tagService = inject(TagService);
  private modalController = inject(ModalController);
  readonly tags = this.tagService.tags;
  // readonly selectedTagInput = input<string>();
  // readonly selectedTag = signal<string>('');
  @Input() selectedTag =  signal<string>('');

  constructor() {
    effect(() => {
      // this.selectedTag.set(this.selectedTagInput() ?? '');
      console.log('Selected tag:', this.selectedTag());
    });
  }

  cancel() {
    this.modalController.dismiss(this.selectedTag());
  }

  selectTag(tag: string) {
    const current = this.selectedTag();

    if (tag === current) {
      this.selectedTag.set('');
      console.log('タグ選択解除', this.selectedTag());
    } else {
      this.selectedTag.set(tag);
      console.log('タグ選択', this.selectedTag());
    }
  }
}
