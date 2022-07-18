import * as React from 'react'
import { useEffect, useState } from 'react'
import loadingGif from '../../assets/loading.gif'
import DeviceList from './components/DeviceList'
import AddDeviceItem from './components/DeviceItem/AddDeviceItem'
import {fetechDevices} from "./actions";
import styles from './style.scss'
import {setNavigation} from "../../components/Navigation/actions";
import {getMarketingPage} from "../../services/UrlService";

type Props = {
  dispatch: any,
  fetchDevices: Function,
  devicesData: any,
  lastSeenData: any
};

const DeviceListPage = (props: Props) => {

  useEffect(() => {
    props.dispatch(fetechDevices())

    props.dispatch(setNavigation([
      { name: 'uConfy', uri: getMarketingPage() },
      { name: 'Devices' },
    ]));
  }, [])

  return (
      <>
        <h2>List of Devices</h2>
        {props.devicesData ?
          <p>
            Registered devices can be found below.
          </p> :
          <div className={styles.loadingContainer}>
            <img src={loadingGif} /> Loading ...
          </div>
        }


        {props.devicesData && <DeviceList
          items={props.devicesData.devices}
          lastSeen={props.devicesData.deviceIdLastSeen}
          dispatch={props.dispatch}
          />}

        <AddDeviceItem dispatch={props.dispatch} />
      </>
    );
}

export default DeviceListPage;
