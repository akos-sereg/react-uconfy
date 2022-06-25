/**
 * The intention of this service is to know about all possible URL references.
 * All url construction / parsing logic should go here - this way it is easier later to lookup url references.
 */

import {Subpage} from "../model/DevicePage";
import config from './Config'

const appRoot = config.appRoot

const getRootPage = () => {
  return `${appRoot}#/`
}

const getCreateDeviceUri = () => {
  return `${appRoot}#/device/create`
}

const getDeviceUri = (deviceId: string) => {
  return `${appRoot}#/device/${deviceId}`
}

const getDeviceSubpageUri = (deviceId: string, subpage: Subpage) => {
  switch (subpage) {
    case Subpage.Parameters:
      return `${appRoot}#/device/${deviceId}/parameters`
    case Subpage.Console:
      return `${appRoot}#/device/${deviceId}/console`
    case Subpage.Activity:
      return `${appRoot}#/device/${deviceId}/activity`
    case Subpage.Command:
      return `${appRoot}#/device/${deviceId}/command`
    case Subpage.Access:
    default:
      return `${appRoot}#/device/${deviceId}`
  }
}

const getSubpageFromUri = () => {
  const hash = document.location.hash
  if (hash.match(/\#\/device\/[a-z0-9\-]*$/gm) != null) {
    return Subpage.Access
  }

  if (hash.match(/\#\/device\/[a-z0-9\-]*\/parameters$/gm) != null) {
    return Subpage.Parameters
  }

  if (hash.match(/\#\/device\/[a-z0-9\-]*\/console$/gm) != null) {
    return Subpage.Console
  }

  if (hash.match(/\#\/device\/[a-z0-9\-]*\/activity$/gm) != null) {
    return Subpage.Activity
  }

  if (hash.match(/\#\/device\/[a-z0-9\-]*\/command$/gm) != null) {
    return Subpage.Command
  }

  return Subpage.Access
}

const getHashPage = (hash: string) => {
  return `${appRoot}${hash}`
}

const getDeviceListUri = () => {
  return `${appRoot}#/device`
}

export {
  getCreateDeviceUri,
  getDeviceUri,
  getDeviceListUri,
  getDeviceSubpageUri,
  getHashPage,
  getSubpageFromUri,
  getRootPage
}
