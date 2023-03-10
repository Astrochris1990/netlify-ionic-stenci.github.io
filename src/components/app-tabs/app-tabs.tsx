import { modalController } from '@ionic/core';
import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-tabs',
  styleUrl: 'app-tabs.css',
  // shadow: true,
})
export class AppTabs {

  async showModal() {
    const modal = await modalController.create({
      component: "app-modal"
    })

    await modal.present()
  }

  render() {
    return (
      <ion-tabs>
        <ion-tab tab="tab-home">
          <ion-nav></ion-nav>
        </ion-tab>
        <ion-tab tab="tab-notice">
          <ion-nav></ion-nav>
        </ion-tab>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="tab-home">
            <ion-icon name="home"></ion-icon>
            <ion-label>Home</ion-label>
          </ion-tab-button>
          <ion-tab-button tab="tab-notice">
            <ion-icon name="notifications"></ion-icon>
            <ion-badge color="danger">12</ion-badge>
            <ion-label >Notices</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    );
  }

}
