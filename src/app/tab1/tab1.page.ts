import { Component, inject, signal } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { TagModalComponent } from './components/modals/tag-modal/tag-modal.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonicModule],
})
export class Tab1Page {
  private modalController = inject(ModalController);
  readonly selectedTag = signal<string>('');

  async toggleTag() {
    const modal = await this.modalController.create({
      component: TagModalComponent,
      componentProps: {
        selectedTag: this.selectedTag,
      },
      breakpoints: [0, 0.5, 1],
      initialBreakpoint: 0.5,
      handle: true,
      backdropDismiss: false,
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data) {
      this.selectedTag.set(data);
      console.log('tab1 selected tag:', this.selectedTag());
    }
  }
  constructor() {}
}
