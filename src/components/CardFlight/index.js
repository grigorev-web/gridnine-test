import cl from "./CardFlight.module.css";
import FormatDateTime from "./FormatDateTime";
import FormatDiffTime from "./FormatDiffTime";
import TransferCountBlock from "./TransferCountBlock";
const CardFlight = (props) => {
  
  return (
    <div className={cl.card}>
      <div className={cl.cardCaption}>
        <div className={cl.captionTop}>
          <div className={cl.logo}>{props.flight.carrier.caption}</div>
          <div className={cl.price}>{props.flight.price.total.amount} RUB</div>
        </div>
        <div className={cl.captionBottom}>
          Стоимость для одного взрослого пассажира
        </div>
      </div>
      {props.flight.legs.map((leg, index) => {
        return (
          <div key={index} className={cl.cardLeg}>
            <div className={cl.airports}>
                {leg.segments[0].departureAirport.caption}
                <span className="text-primary">({leg.segments[0].departureAirport.uid})  &#8594; </span>
                {leg.segments[leg.segments.length - 1].arrivalAirport.caption}
                <span className="text-primary">({leg.segments[leg.segments.length - 1].arrivalAirport.uid})</span>
            </div>
            <div className={cl.travelDates}>
                <div className={cl.timeBlock}>
                    <div className={cl.dateTimeFormat}>
                        <FormatDateTime date={leg.segments[0].departureDate}/>
                    </div>
                    <div className={cl.timeFormat}>
                        <FormatDiffTime departure={leg.segments[0].departureDate}
                                        arrival={leg.segments[leg.segments.length - 1].arrivalDate}
                        />
                    </div>
                    <div className={cl.dateTimeFormat}>
                        <FormatDateTime date={leg.segments[leg.segments.length - 1].arrivalDate}/>
                    </div>
                </div>
                <TransferCountBlock segments={leg.segments}/>
            </div>
            <div className={cl.carrierInfo}>Рейс выполняет: {props.flight.carrier.caption}</div>
            <hr />
          </div>
        );
      })}
      <div className={cl.chooseBtn}>Выбрать</div>
    </div>
  );
};

export default CardFlight;
