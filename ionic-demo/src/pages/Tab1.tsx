import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import { Navigation, Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Tab1.css";
import "swiper/css/bundle";
import MyMap from "../components/GoogleMap";
const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Find an Office</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Find Office</IonTitle>
          </IonToolbar>
        </IonHeader>
        <MyMap />
        <Swiper
          pagination={{ clickable: true }}
          mousewheel
          modules={[Pagination, Mousewheel]}
          loop={true}
        >
          <SwiperSlide>
            <IonCard title="SLIDE 1">
              <IonCardHeader>
                <IonCardTitle>Dental Arts on the Square</IonCardTitle>
                <IonCardSubtitle>
                  3536 RHOADS AVENUE NEWTOWN SQUARE PA 19073
                </IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                <IonButton>9:00</IonButton>
                <IonButton>10:00</IonButton>
              </IonCardContent>
            </IonCard>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <IonCard title="SLIDE 2">
              <IonCardHeader>
                <IonCardTitle>Brandywine Smile Center</IonCardTitle>
                <IonCardSubtitle>
                  736 BALTIMORE PIKE 7 GLEN MILLS PA 19342
                </IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                <IonButton>12:00</IonButton>
                <IonButton>1:00</IonButton>
              </IonCardContent>
            </IonCard>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <IonCard title="SLIDE 3">
              <IonCardHeader>
                <IonCardTitle>Brookfield</IonCardTitle>
                <IonCardSubtitle>
                  3149 S Moorland Road, Brookfield, WI 53151
                </IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                <IonButton>8:30</IonButton>
              </IonCardContent>
            </IonCard>
          </SwiperSlide>
        </Swiper>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
