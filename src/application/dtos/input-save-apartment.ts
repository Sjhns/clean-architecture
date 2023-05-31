export type SaveApartmentDTOInput = {
  id?: string
  address: string
  size: number
  numberOfRooms: number
  numberOfBathrooms: number
  vacancies: number
  rent: number
  acceptsRoommates: boolean
  maxRoommates?: number
}
