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
                  Indywidualne ubezpieczenie na zycie kierowane jest do osób fizycznych. Ochrona ubezpieczeniowa objete jest zdrowie i zycie Ubezpieczonego. Swiadczenie moze byc wyplacone Ubezpieczonemu (w przypadku np. trwalego inwalidztwa) lub osobie uprawnionej (w przypadku zgonu Ubezpieczonego).
                  <br />
                  <br />
                  Grupowe ubezpieczenie na zycie to dobre zabezpieczenie zdrowia i zycia pracowników, czlonków ich rodzin. Kierowane jest do osób zatrudnionych w jednym zakladzie pracy (grupa liczona jest juz od trzech osób), rodzina pracownika (malzonek lub konkubent, pelnoletnie dzieci) o ile On sam zawarl polise. Ochrona objete jest zycie i zdrowie osób wymienionych w umowie, co daje Ubezpieczonemu poczucie stabilnosci i bezpieczenstwa.
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
                  Ubezpieczenie domu lub mieszkania to ochrona dla nieruchomosci od zalania, pozaru, silnego wiatru i wielu innych zdarzen losowych, jak i równiez od przepiec zwiazanych ze zmiana napiecia w instalacji elektrycznej.Ubezpieczenie domu chroni równiez od kradziezy oraz zniszczen dokonanych przez osoby trzecie.
                  <br />
                  <br />
                  OC w zyciu prywatnym to ochrona przed finansowymi skutkami za szkody wyrzadzone osobom trzecim. Co wazne, ubezpieczenie to dziala nie tylko w obrebie nieruchomosci, ale na terenie calego kraju. Ochrona obejmuje równiez szkody powstale wskutek amatorskiego uprawiania sportu oraz spowodowane przez zwierzeta domowe.
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
                  OC/AC-OC posiadaczy pojazdów mechanicznych jest ubezpieczeniem obowiazkowym, kazdy wlasciciel pojazdu powinien takie ubezpieczenie miec. Nalezy pamietac, ze ubezpieczenie OC chroni nas przede wszystkim od szkód wyrzadzonych w wyniku poruszania sie naszego pojazdu.
                  Autocasco jest polisa dobrowolna, która moze zostac wykupiona w pakiecie razem z obowiazkowym ubezpieczeniem odpowiedzialnosci cywilnej lub tez jako samodzielne ryzyko, niezalezne od okresu ochrony ubezpieczenia OC. Zakres AC obejmuje wszelkie zdarzenia losowe takie jak upadek drzewa na auto, uszkodzenie karoserii przez grad, wandalizm, kradziez oraz szkody wlasne.
                  NNW/ASS-Jest ubezpieczeniem dobrowolnym, które mozna zawrzec wraz z ubezpieczeniem OC lub AC. Ubezpieczenie nastepstw nieszczesliwych wypadków nalezy do grupy ubezpieczen osobowych, w których ochrona objete jest zycie kierowcy i pasazerów od takich przypadków jak wsiadanie lub wysiadanie z pojazdu albo bezposrednio przy zaladunku, badz roladunku.
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
                  Glównym elementem polis turystycznych jest ubezpieczenie kosztów leczenia(KLZ), które zapewnia m.in. leczenie szpitalne, ambulatoryjne, wydatki poniesione na leki czy transport miedzy placówkami medycznymi. Koszty leczenia sa bardzo zróznicowane, dlatego trzeba wziac pod uwage stawki obowiazujace w miejscu, do którego sie aktualnie ybieramy.
                  <br />
                  <br />
                  Podczas wyjazdu za granice w celach zarobkowych, czy tez podrózy sluzbowej powinnismy zadbac o ubezpieczenie kosztów leczenia w razie choroby badz nieszczesliwego wypadku. Nalezy pamietac, aby polisa obejmowala swoim zakresem prace za granica, w przeciwnym wypadku ubezpieczyciel moze odmówic udzielenia pomocy podczas naglego zdarzenia.
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
                  Ubezpieczenie OC rolników obejmuje odpowiedzialnosc cywilna rolnika oraz kazdej osoby, która pracujac w gospodarstwie rolnym - w okresie trwania ochrony ubezpieczeniowej - wyrzadzila szkode zwiazana z funkcjonowaniem tego gospodarstwa. Ta forma ubezpieczenia chroni równiez w przypadku kolizji i wypadków w których wine poniesli kierujacy pojazdami wolnobieznymi (np. maszynami rolniczymi), nalezacymi do ubezpieczonego rolnika i uzytkowanymi w jego gospodarstwie.
                  <br />
                  <br />
                  Obowiazkowe ubezpieczenie budynków rolniczych to przede wszystkim ubezpieczenie od ognia i innych zdarzen losowych. Objete nim sa fundamenty, izolacje, sciany zewnetrzne i wewnetrzne, tynki, stropy schody, balkony, dachy, instalacje oraz stale elementy wykonczeniowe. Ubezpieczenie zapewnia praktycznie pelna ochrone ubezpieczonych roslin za niska skladke. Zakres i przedmiot ubezpieczenia uzalezniony jest od uregulowan zawartych w ustawie o doplatach do ubezpieczen upraw rolnych i zwierzat gospodarskich. Ubezpieczeniem objeta moze zostac prawie cala produkcja roslinna. Kazdy ma mozliwosc wyboru wariantu ubezpieczenia i tym samym dopasowania jego zakresu do swoich indywidualnych potrzeb.
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
