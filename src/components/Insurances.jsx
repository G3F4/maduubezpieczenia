import React from 'react';
import FullScreenDialog from "./FullScreenDialog";
import Typography from "@material-ui/core/Typography";

export default function Insurances() {
  return (
    <section className="colorlib-education" data-section="insurances">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div className="col-md-12 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
            <div className="hire">
              <h2 style={{ textAlign: 'center' }}>NOWOŚĆ! Ubezpieczenie psa i kota</h2>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
            <h2 className="colorlib-heading animate-box">Ubezpieczenia</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
            <div className="services color-1">
              <div className="insurancesTileHeader">
                <span className="icon2"><i style={{ fontSize: 36 }} className="icon-star2"></i></span>
                <h2>Zwierzęta</h2>
              </div>
              <ul>
                <li className="insurancesTileItem">Pies</li>
                <li className="insurancesTileItem">Kot</li>
                <FullScreenDialog title="Pies i kot">
                  <Typography style={{ fontSize: 18 }} color="error">Ubezpieczenie dostępne w sprzedaży w marcu 2020 roku.</Typography>
                  <br />
                  <div>Jeśli jesteś zainteresowany, skontaktuj się.</div>
                </FullScreenDialog>
              </ul>
            </div>
          </div>
          <div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
            <div className="services color-1">
              <div className="insurancesTileHeader">
                <span className="icon2"><i style={{ fontSize: 36 }} className="icon-user-add"></i></span>
                <h2>Zdrowotne</h2>
              </div>
              <ul>
                <li>Indywidualne</li>
                <li>Grupowe</li>
                <FullScreenDialog title="Indywidualne i grupowe">
                  Indywidualne ubezpieczenie na życie kierowane jest do osób fizycznych. Ochroną ubezpieczeniową objęte jest zdrowie i życie Ubezpieczonego. Świadczenie może być wypłacone ubezpieczonemu lub osobie uprawnionej np. w przypadku trwałego inwalidztwa czy w przypadku zgonu Ubezpieczonego.
                  <br />
                  <br />
                  Grupowe ubezpieczenie na życie to dobre zabezpieczenie zdrowia i życia pracowników oraz ich rodzin. Kierowane jest do osób zatrudnionych w jednym miejscu pracy - grupa liczona już od trzech osób, a także rodzina pracownika - malzonek lub konkubent jak i pełnoletnie dzieci. Ochroną objęte jest życie i zdrowie osób wymienionych w umowie, co daje Ubezpieczonemu poczucie zabezpieczenia.
                  <br />
                  <br />
                </FullScreenDialog>
              </ul>
            </div>
          </div>
          <div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
            <div className="services color-1">
              <div className="insurancesTileHeader">
                <span className="icon2"><i style={{ fontSize: 36 }} className="icon-home-outline"></i></span>
                <h2>Majątkowe</h2>
              </div>
              <ul>
                <li>Dom</li>
                <li>Mieszkanie</li>
                <FullScreenDialog title="Dom i mieszkanie">
                  Indywidualne ubezpieczenie na życie kierowane jest do osób fizycznych. Ochroną ubezpieczeniową objęte jest zdrowie i życie Ubezpieczonego. Świadczenie może być wypłacone ubezpieczonemu lub osobie uprawnionej np. w przypadku trwałego inwalidztwa czy w przypadku zgonu Ubezpieczonego. Ubezpieczenie domu lub mieszkania to ochrona dla nieruchomości od zalania, pożaru, silnego wiatru i wielu innych zdarzeń losowych, jak i również od przepieć związanych ze zmianą napięcia w instalacji elektrycznej. Dom jest ubezpieczony również od kradzieży oraz zniszczeń dokonanych przez osoby trzecie.
                  <br />
                  <br />
                  OC w życiu prywatnym to ochrona przed finansowymi skutkami za szkody wyrządzone osobom trzecim. Co ważne, ubezpieczenie to działa nie tylko w obrębie nieruchomości, ale na terenie całego kraju. Ochrona obejmuje również szkody powstałe wskutek amatorskiego uprawiania sportu oraz spowodowane przez zwierzęta domowe.
                  <br />
                  <br />
                </FullScreenDialog>
              </ul>
            </div>
          </div>
          <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
            <div className="services color-1">
              <div className="insurancesTileHeader">
                <span className="icon2"><i style={{ fontSize: 36 }} className="icon-truck2"></i></span>
                <h2>Komunikacyjne</h2>
              </div>
              <ul>
                <li>OC/AC</li>
                <li>NNW/ASS</li>
                <FullScreenDialog title="Komunikacyjne">
                  <p>
                    OC posiadaczy pojazdów mechanicznych jest ubezpieczeniem obowiązkowym. Należy pamiętać, że OC chroni nas przede wszystkim od szkód wyrządzonych w wyniku poruszania się naszego pojazdu.
                    Autocasco jest dobrowolne i może zostać wykupione w pakiecie razem z obowiązkowym ubezpieczeniem odpowiedzialności cywilnej lub jako samodzielne ryzyko, niezależne od okresu ochrony ubezpieczenia OC. Zakres AC obejmuje wszelkie zdarzenia losowe takie jak upadek drzewa na auto, uszkodzenie karoserii przez grad, wandalizm, kradzież czy szkody własne.
                  </p>
                  <p>
                    NNW jest ubezpieczeniem dobrowolnym, które można zawrzeć wraz z ubezpieczeniem OC lub AC. Ubezpieczenie następstw nieszczęśliwych wypadków należy do grupy ubezpieczeń osobowych, w których ochroną objęte jest życie kierowcy oraz pasażerów od takich przypadków jak wsiadanie lub wysiadanie z pojazdu albo bezpośrednio przy załadunku, bądź rozładunku.
                    Assistance jest ubezpieczeniem dobrowolnym, mający na celu zapewnienie ubezpieczonemu określonej pomocy np. technicznej lub medycznej w związku z powstałą awarią lub kolizja. Firmy oferują bardzo różne zakresy usług assistance, dlatego przed zakupem trzeba się zastanowić, czy może być Ci potrzebne holowanie jedynie na terenie RP czy też za granicą.
                  </p>
                </FullScreenDialog>
              </ul>
            </div>
          </div>
          <div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
            <div className="services color-1">
              <div className="insurancesTileHeader">
                <span className="icon2"><i style={{ fontSize: 36 }} className="icon-briefcase"></i></span>
                <h2>Podróżne</h2>
              </div>
              <ul>
                <li>Turystyczne</li>
                <li>Służbowe</li>
                <FullScreenDialog title="Służbowe i turystyczne">
                  Głównym elementem polis turystycznych jest ubezpieczenie kosztów leczenia, które zapewnia m.in. leczenie szpitalne, ambulatoryjne, wydatki poniesione na leki czy transport między placówkami medycznymi. Koszty leczenia są bardzo zróżnicowane, dlatego trzeba wziąć pod uwagę stawki obowiązujące w miejscu, do którego się aktualnie wybieramy.
                  <br />
                  <br />
                  Podczas wyjazdu za granicę w celach zarobkowych, czy też podróży służbowej powinniśmy zadbać o ubezpieczenie kosztów leczenia w razie choroby, bądź nieszczęśliwego wypadku. Należy pamiętać, aby polisa obejmowała swoim zakresem pracę za granicą, w przeciwnym wypadku ubezpieczyciel może odmówić udzielenia pomocy podczas nagłego zdarzenia.
                  <br />
                  <br />
                </FullScreenDialog>
              </ul>
            </div>
          </div>
          <div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
            <div className="services color-1">
              <div className="insurancesTileHeader">
                <span className="icon2"><i style={{ fontSize: 36 }} className="icon-leaf"></i></span>
                <h2>Rolne</h2>
              </div>
              <ul>
                <li>OC rolnika</li>
                <li>Budynki/uprawy</li>
                <FullScreenDialog title="OC rolnika, budynki i uprawy">
                  OC rolnika obejmuje odpowiedzialnością rolnika oraz każdą osobę, która pracując w gospodarstwie wyrządziła szkodę związaną z funkcjonowaniem tego gospodarstwa. Ta forma ubezpieczenia chroni również w przypadku kolizji i wypadków, w których winę ponieśli kierujący pojazdami wolnobieżnymi, należącymi do ubezpieczonego rolnika i użytkowanymi w jego gospodarstwie.
                  <br />
                  <br />
                  Obowiązkowe ubezpieczenie budynków rolniczych to przede wszystkim ubezpieczenie od ognia i innych zdarzeń losowych. Objęte są nim fundamenty, izolacje, ściany zewnętrzne i wewnętrzne, tynki, stropy schody, balkony, dachy, instalacje oraz stałe elementy wykończeniowe. Ubezpieczenie zapewnia praktycznie pełną ochronę ubezpieczonych roślin za niską składkę. Zakres i przedmiot ubezpieczenia uzależniony jest od uregulowań zawartych w ustawie o dopłatach do ubezpieczeń upraw rolnych i zwierząt gospodarskich. Ubezpieczeniem objęta może zostać prawie cała produkcja roślinna.
                  <br />
                  <br />
                </FullScreenDialog>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
