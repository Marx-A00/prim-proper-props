function DinnerSupplies({guestList}){
    return(
        <>
        <div>
        Spoons: {guestList.length * 2}
      </div>
      <div>
        Forks: {guestList.length * 2}
      </div>
      <div>
        Knives: {guestList.length * 2}
      </div>
      </>
    )
}
export default DinnerSupplies;