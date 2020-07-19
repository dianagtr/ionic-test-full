import React from 'react'
import {
  IonList,
  IonItemSliding,
  IonItem,
  IonItemOptions,
  IonLabel,
  IonItemOption,
  IonListHeader,
  IonButton,
} from '@ionic/react'

interface ContainerProps {
  title: string
}

const ModelList: React.FC<ContainerProps> = ({ title }) => {
  return (
    <div>
      <IonList>
        <IonListHeader lines="inset">
          <IonLabel>{title}</IonLabel>
          <IonButton>Clear</IonButton>
        </IonListHeader>
        <IonItemSliding>
          <IonItem>
            <IonLabel>Item</IonLabel>
          </IonItem>
          <IonItemOptions side="end">
            <IonItemOption onClick={() => {}}>Delete</IonItemOption>
          </IonItemOptions>
        </IonItemSliding>

        <IonItemSliding>
          <IonItem>
            <IonLabel>Item</IonLabel>
          </IonItem>
          <IonItemOptions side="end">
            <IonItemOption onClick={() => {}}>Delete</IonItemOption>
          </IonItemOptions>
        </IonItemSliding>
      </IonList>
    </div>
  )
}

export default ModelList
