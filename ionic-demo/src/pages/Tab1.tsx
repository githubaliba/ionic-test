import {
  IonCard,
  IonCardContent,
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
        <Swiper
          pagination={{ clickable: true }}
          mousewheel
          modules={[Pagination, Mousewheel]}
          loop={true}
        >
          <SwiperSlide>
            <IonCard title="SLIDE 1">
              <IonCardContent>I am slide 1</IonCardContent>
            </IonCard>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <IonCard title="SLIDE 2">
              <IonCardContent>I am slide 2</IonCardContent>
            </IonCard>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <IonCard title="SLIDE 3">
              <IonCardContent>I am slide 3</IonCardContent>
            </IonCard>
          </SwiperSlide>
        </Swiper>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
