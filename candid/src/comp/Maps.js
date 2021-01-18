import React, { Component } from 'react'
import MapGL, { NavigationControl, FullscreenControl, Source, Layer } from '@urbica/react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

export default class Maps extends Component {
  constructor(props) {
    super(props)
    this.state = {
      viewport: {
        latitude: -31.9590544,
        longitude: 115.8353351,
        zoom: 9
      },
      data: {
        type: 'Feature',
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [
                116.005401472,
                -32.133818579
              ],
              [
                116.008100992,
                -32.136073377
              ],
              [
                116.010103648,
                -32.136428966
              ],
              [
                116.010830112,
                -32.131984822
              ],
              [
                116.01279792,
                -32.132002767
              ],
              [
                116.013000224,
                -32.131309775
              ],
              [
                116.014556992,
                -32.131172006
              ],
              [
                116.016091008,
                -32.131173005
              ],
              [
                116.016173312,
                -32.132000787
              ],
              [
                116.017973984,
                -32.131974517
              ],
              [
                116.01727632,
                -32.142147575
              ],
              [
                116.018437664,
                -32.14508112
              ],
              [
                116.021207168,
                -32.149855803
              ],
              [
                116.021738624,
                -32.149872694
              ],
              [
                116.018564992,
                -32.153051993
              ],
              [
                116.01696672,
                -32.16291525
              ],
              [
                116.015281184,
                -32.16934485
              ],
              [
                116.015158432,
                -32.172070955
              ],
              [
                116.008667104,
                -32.177704427
              ],
              [
                116.008769088,
                -32.173024575
              ],
              [
                116.009941024,
                -32.166565485
              ],
              [
                116.007674752,
                -32.166422184
              ],
              [
                116.005968704,
                -32.167558971
              ],
              [
                116.005223872,
                -32.166804412
              ],
              [
                116.004848768,
                -32.165012613
              ],
              [
                115.997713952,
                -32.159395402
              ],
              [
                115.984236608,
                -32.147870402
              ],
              [
                115.98401088,
                -32.147162185
              ],
              [
                115.990885792,
                -32.147107203
              ],
              [
                115.990860992,
                -32.145975909
              ],
              [
                116.005401472,
                -32.133818579
              ]
            ]
          ]
        }
      },
      data0: {
        type: 'Feature',
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [
                115.748804864,
                -32.063964022
              ],
              [
                115.74705888,
                -32.060115005
              ],
              [
                115.746810848,
                -32.060385992
              ],
              [
                115.746087616,
                -32.059711001
              ],
              [
                115.745385952,
                -32.060752015
              ],
              [
                115.74335088,
                -32.058688044
              ],
              [
                115.742395072,
                -32.058586978
              ],
              [
                115.742196,
                -32.059155964
              ],
              [
                115.742688128,
                -32.059245967
              ],
              [
                115.742324864,
                -32.059458994
              ],
              [
                115.74285984,
                -32.060214997
              ],
              [
                115.742539072,
                -32.060698014
              ],
              [
                115.743470048,
                -32.061091046
              ],
              [
                115.742036864,
                -32.06127303
              ],
              [
                115.740356032,
                -32.063102995
              ],
              [
                115.739013952,
                -32.062418994
              ],
              [
                115.740354944,
                -32.062822017
              ],
              [
                115.74144288,
                -32.060948041
              ],
              [
                115.74083264,
                -32.059775067
              ],
              [
                115.739666656,
                -32.06021409
              ],
              [
                115.738321664,
                -32.061929133
              ],
              [
                115.738410683,
                -32.062455154
              ],
              [
                115.738076672,
                -32.06204313
              ],
              [
                115.739425632,
                -32.060137093
              ],
              [
                115.741385984,
                -32.059420015
              ],
              [
                115.740894944,
                -32.056980031
              ],
              [
                115.732154656,
                -32.055788132
              ],
              [
                115.737654944,
                -32.056268041
              ],
              [
                115.736898624,
                -32.055708064
              ],
              [
                115.737969568,
                -32.055980051
              ],
              [
                115.738356576,
                -32.055125036
              ],
              [
                115.737978592,
                -32.055005027
              ],
              [
                115.738496992,
                -32.054820027
              ],
              [
                115.737896864,
                -32.054643981
              ],
              [
                115.742253952,
                -32.052427015
              ],
              [
                115.752482336,
                -32.042297728
              ],
              [
                115.757988224,
                -32.041225617
              ],
              [
                115.758133568,
                -32.047290897
              ],
              [
                115.776260992,
                -32.047046827
              ],
              [
                115.77953088,
                -32.047100902
              ],
              [
                115.779583808,
                -32.054910843
              ],
              [
                115.7796472,
                -32.057132527
              ],
              [
                115.761267008,
                -32.057588996
              ],
              [
                115.761568992,
                -32.063496009
              ],
              [
                115.756976608,
                -32.063565033
              ],
              [
                115.748804864,
                -32.063964022
              ]
            ]
          ]

        }
      },
      data1: {
        type: 'Feature',
        geometry: {
          type: 'Polygon',
          coordinates:[
            [
              [
                115.792067168,
                -31.77527376
              ],
              [
                115.791580992,
                -31.771326009
              ],
              [
                115.793112992,
                -31.768375
              ],
              [
                115.792243008,
                -31.767294007
              ],
              [
                115.791792,
                -31.765340999
              ],
              [
                115.788396992,
                -31.761899
              ],
              [
                115.782741984,
                -31.758685994
              ],
              [
                115.780667008,
                -31.754756003
              ],
              [
                115.779663232,
                -31.75385052
              ],
              [
                115.777595264,
                -31.753198691
              ],
              [
                115.7764536,
                -31.755262958
              ],
              [
                115.773145568,
                -31.757259608
              ],
              [
                115.773893984,
                -31.759028725
              ],
              [
                115.773984992,
                -31.761083002
              ],
              [
                115.772028,
                -31.761456
              ],
              [
                115.77047328,
                -31.762490038
              ],
              [
                115.764055872,
                -31.755224663
              ],
              [
                115.758332288,
                -31.745095377
              ],
              [
                115.756870656,
                -31.739999921
              ],
              [
                115.755743168,
                -31.736287897
              ],
              [
                115.750492928,
                -31.725574824
              ],
              [
                115.74958976,
                -31.722582764
              ],
              [
                115.749750464,
                -31.72236167
              ],
              [
                115.768043968,
                -31.717575923
              ],
              [
                115.770923648,
                -31.718036259
              ],
              [
                115.773747936,
                -31.717248584
              ],
              [
                115.77430384,
                -31.723000604
              ],
              [
                115.782975936,
                -31.732654515
              ],
              [
                115.784693984,
                -31.732596998
              ],
              [
                115.79225408,
                -31.74298362
              ],
              [
                115.787774016,
                -31.751885099
              ],
              [
                115.789706304,
                -31.756560918
              ],
              [
                115.795651712,
                -31.762389343
              ],
              [
                115.799086528,
                -31.770410518
              ],
              [
                115.796116448,
                -31.776716872
              ],
              [
                115.792067168,
                -31.77527376
              ]
            ]
          ]
        }
      }, data2: {
        type: 'Feature',
        geometry: {
          type: 'Polygon',
          coordinates:[
            [
              [
                116.023233984,
                -31.879689999
              ],
              [
                116.023345248,
                -31.885817421
              ],
              [
                116.018611744,
                -31.886077309
              ],
              [
                116.018627904,
                -31.888091108
              ],
              [
                116.019277312,
                -31.888131827
              ],
              [
                116.019258016,
                -31.892829994
              ],
              [
                116.026734944,
                -31.894085793
              ],
              [
                116.025919904,
                -31.897025739
              ],
              [
                116.02329792,
                -31.89971451
              ],
              [
                116.022884608,
                -31.9005787
              ],
              [
                116.023230048,
                -31.90076777
              ],
              [
                116.021004608,
                -31.902580252
              ],
              [
                116.01948016,
                -31.902315777
              ],
              [
                116.016877248,
                -31.90450379
              ],
              [
                116.015996736,
                -31.904503235
              ],
              [
                116.015020256,
                -31.904020348
              ],
              [
                116.0138016,
                -31.902243552
              ],
              [
                116.009512256,
                -31.902086691
              ],
              [
                116.008237664,
                -31.899044366
              ],
              [
                116.008576832,
                -31.898681433
              ],
              [
                116.006511936,
                -31.897576188
              ],
              [
                116.003314848,
                -31.89689017
              ],
              [
                116.000237312,
                -31.894575118
              ],
              [
                116.001179392,
                -31.893385975
              ],
              [
                116.001217984,
                -31.892177
              ],
              [
                115.996104,
                -31.891524005
              ],
              [
                115.996240992,
                -31.889434005
              ],
              [
                115.999991648,
                -31.886306099
              ],
              [
                116.000000992,
                -31.885184998
              ],
              [
                116.001178272,
                -31.885191955
              ],
              [
                116.004543872,
                -31.879644341
              ],
              [
                116.009075136,
                -31.87966841
              ],
              [
                116.009316,
                -31.878121773
              ],
              [
                116.016213984,
                -31.877941009
              ],
              [
                116.016931808,
                -31.877990644
              ],
              [
                116.016806528,
                -31.879528734
              ],
              [
                116.023233984,
                -31.879689999
              ]
            ]
          ]
        }
      }, data3: {
        type: 'Feature',
        geometry: {
          type: 'Polygon',
          coordinates:[
            [
              [
                115.850616128,
                -31.946661627
              ],
              [
                115.850392928,
                -31.945697185
              ],
              [
                115.851894848,
                -31.942051372
              ],
              [
                115.854233568,
                -31.943139893
              ],
              [
                115.861065824,
                -31.946279935
              ],
              [
                115.85874672,
                -31.949977678
              ],
              [
                115.850616128,
                -31.946661627
              ]
            ]
          ]
        }
      }, data4: {
        type: 'Feature',
        geometry: {
          type: 'Polygon',
          coordinates:[
            [
              [
                115.803779392,
                -31.893381035
              ],
              [
                115.807421312,
                -31.895819298
              ],
              [
                115.816821792,
                -31.898280464
              ],
              [
                115.819144896,
                -31.899917418
              ],
              [
                115.820654624,
                -31.901762127
              ],
              [
                115.823635136,
                -31.899397013
              ],
              [
                115.819917312,
                -31.895617593
              ],
              [
                115.820031808,
                -31.895179327
              ],
              [
                115.822962144,
                -31.894412651
              ],
              [
                115.823789728,
                -31.891944898
              ],
              [
                115.822906016,
                -31.890357931
              ],
              [
                115.828288864,
                -31.890358024
              ],
              [
                115.82826512,
                -31.896572637
              ],
              [
                115.82960256,
                -31.896584995
              ],
              [
                115.829591296,
                -31.897577964
              ],
              [
                115.828928992,
                -31.897570471
              ],
              [
                115.828917056,
                -31.904211527
              ],
              [
                115.828865984,
                -31.914258026
              ],
              [
                115.825491008,
                -31.914237602
              ],
              [
                115.825346848,
                -31.91513254
              ],
              [
                115.823177984,
                -31.915261447
              ],
              [
                115.820508672,
                -31.915037135
              ],
              [
                115.82003248,
                -31.915619626
              ],
              [
                115.8201128,
                -31.917104362
              ],
              [
                115.81380352,
                -31.917128171
              ],
              [
                115.812224896,
                -31.913961693
              ],
              [
                115.810076416,
                -31.912179107
              ],
              [
                115.803889888,
                -31.909059341
              ],
              [
                115.802022272,
                -31.908716684
              ],
              [
                115.800294944,
                -31.90909697
              ],
              [
                115.802039584,
                -31.904358954
              ],
              [
                115.802102752,
                -31.903776074
              ],
              [
                115.803091744,
                -31.903556775
              ],
              [
                115.804140032,
                -31.899932495
              ],
              [
                115.803039072,
                -31.899332022
              ],
              [
                115.80291568,
                -31.897405932
              ],
              [
                115.800668992,
                -31.894357835
              ],
              [
                115.803779392,
                -31.893381035
              ]
            ]
          ]
        }
      }, data5: {
        type: 'Feature',
        geometry: {
          type: 'Polygon',
          coordinates:[
            [
              [
                115.81752384,
                -31.801160348
              ],
              [
                115.81681536,
                -31.799718458
              ],
              [
                115.809563936,
                -31.785376629
              ],
              [
                115.809364,
                -31.784166007
              ],
              [
                115.810272,
                -31.784172001
              ],
              [
                115.810271712,
                -31.783561501
              ],
              [
                115.815749024,
                -31.785446781
              ],
              [
                115.822853984,
                -31.785666117
              ],
              [
                115.826396768,
                -31.786396201
              ],
              [
                115.83523728,
                -31.789046696
              ],
              [
                115.84129296,
                -31.789365469
              ],
              [
                115.849138688,
                -31.789755894
              ],
              [
                115.857786592,
                -31.794041511
              ],
              [
                115.856788992,
                -31.794972006
              ],
              [
                115.856718368,
                -31.797459034
              ],
              [
                115.84881504,
                -31.797649437
              ],
              [
                115.838629184,
                -31.802112728
              ],
              [
                115.835290816,
                -31.802400699
              ],
              [
                115.824521888,
                -31.802434017
              ],
              [
                115.824495904,
                -31.801985281
              ],
              [
                115.8200608,
                -31.800218809
              ],
              [
                115.81752384,
                -31.801160348
              ]
            ]
          ]
        }
      }, data6: {
        type: 'Feature',
        geometry: {
          type: 'Polygon',
          coordinates:[
            [
              [
                115.87088736,
                -31.988582016
              ],
              [
                115.881159232,
                -31.988729424
              ],
              [
                115.882207904,
                -31.996057867
              ],
              [
                115.88375664,
                -31.997464385
              ],
              [
                115.886635904,
                -31.998144592
              ],
              [
                115.8878448,
                -32.003786167
              ],
              [
                115.881227008,
                -32.005801003
              ],
              [
                115.87559472,
                -32.004855856
              ],
              [
                115.873548832,
                -32.004209429
              ],
              [
                115.870877632,
                -32.005770662
              ],
              [
                115.864169024,
                -32.005662031
              ],
              [
                115.86407616,
                -32.017062951
              ],
              [
                115.862642592,
                -32.017073885
              ],
              [
                115.856712608,
                -32.016960425
              ],
              [
                115.856769952,
                -32.013865985
              ],
              [
                115.855809824,
                -32.011821994
              ],
              [
                115.853970944,
                -32.011152035
              ],
              [
                115.85429648,
                -32.006969389
              ],
              [
                115.852707008,
                -32.004155964
              ],
              [
                115.854257888,
                -31.999510984
              ],
              [
                115.85482704,
                -31.995757981
              ],
              [
                115.854368032,
                -31.992362011
              ],
              [
                115.853044576,
                -31.988508164
              ],
              [
                115.87088736,
                -31.988582016
              ]
            ]
          ]
        }
      }
    }
  }
  render() {
    return (
      <MapGL
        style={{ width: '100%', height: '400px', minWidth: '920px' }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        accessToken={'pk.eyJ1Ijoic3N1bm55Nzc3IiwiYSI6ImNramU4cDlmYzAzbjEyc2xvYTR0ajhiMzcifQ.uHe7M4xAJcfbi5UfZdU6gQ'}
        latitude={this.state.viewport.latitude}
        longitude={this.state.viewport.longitude}
        zoom={this.state.viewport.zoom}
        onViewportChange={(viewport) => this.setState({ viewport })}
      >
        <NavigationControl showCompass showZoom position='top-right' />       
        <FullscreenControl container={document.querySelector('cont')} />
        <Source id="Armadale" type="geojson" data={this.state.data} />
        <Layer
          id="Armadale"
          type="fill"
          source="Armadale"
          paint={{
            'fill-color': '#088',
            'fill-opacity': 0.8
          }}
        />
        <Source id="Fremantle0" type="geojson" data={this.state.data0} />
        <Layer
          id="Fremantle0"
          type="fill"
          source="Fremantle0"
          paint={{
            'fill-color': '#088',
            'fill-opacity': 0.8
          }}
        />
        <Source id="Joondalup" type="geojson" data={this.state.data1} />
        <Layer
          id="Joondalup"
          type="fill"
          source="Joondalup"
          paint={{
            'fill-color': '#088',
            'fill-opacity': 0.8
          }}
        />
         <Source id="Midland" type="geojson" data={this.state.data2} />
        <Layer
          id="Midland"
          type="fill"
          source="Midland"
          paint={{
            'fill-color': '#088',
            'fill-opacity': 0.8
          }}
        />
        <Source id="Northbridge" type="geojson" data={this.state.data3} />
        <Layer
          id="Northbridge"
          type="fill"
          source="Northbridge"
          paint={{
            'fill-color': '#088',
            'fill-opacity': 0.8
          }}
        />
        <Source id="Osborne Park" type="geojson" data={this.state.data4} />
        <Layer
          id="Osborne Park"
          type="fill"
          source="Osborne Park"
          paint={{
            'fill-color': '#088',
            'fill-opacity': 0.8
          }}
        />
        <Source id="Wangara" type="geojson" data={this.state.data5} />
        <Layer
          id="Wangara"
          type="fill"
          source="Wangara"
          paint={{
            'fill-color': '#088',
            'fill-opacity': 0.8
          }}
        />
        <Source id="Como" type="geojson" data={this.state.data6} />
        <Layer
          id="Como"
          type="fill"
          source="Como"
          paint={{
            'fill-color': '#088',
            'fill-opacity': 0.8
          }}
        />
      </MapGL>
    )
  }
}




