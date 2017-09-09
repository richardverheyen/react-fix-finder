import React, { Component } from 'react';
import '../styles/App.css';
import SearchBar from './SearchBar';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      latLng: '',
      results: [
          {
              "geometry": {
                  "location": {
                      "lat": -37.797255,
                      "lng": 144.986385
                  },
                  "viewport": {
                      "northeast": {
                          "lat": -37.7958027197085,
                          "lng": 144.9877510302915
                      },
                      "southwest": {
                          "lat": -37.7985006802915,
                          "lng": 144.9850530697085
                      }
                  }
              },
              "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
              "id": "58cc303b445db919118fd0ac3a975a9b8a0e475b",
              "name": "CIBI",
              "opening_hours": {
                  "open_now": true,
                  "weekday_text": []
              },
              "photos": [
                  {
                      "height": 2448,
                      "html_attributions": [
                          "<a href=\"https://maps.google.com/maps/contrib/109243850990147348549/photos\">YURI M</a>"
                      ],
                      "photo_reference": "CmRaAAAAmy0RGbkLK00JCLKhyrHwlsfMzc_FUABgsvqO5k-r-cjqgVfQHGKr5Q6pf7xka4UjbyygjsLG_3uKFRGzvBU0fe7bDfaCH57H_yv_WJgju5UhYJMJ5bz-TYK50vwEwCiSEhBItITV6mv-m_c90F9shEgkGhShP3DEaqDismxZkl1SG7Cj54jYsw",
                      "width": 3264
                  }
              ],
              "place_id": "ChIJG4Vz0x5D1moRbtvZbTs4bRU",
              "price_level": 1,
              "rating": 4.4,
              "reference": "CmRRAAAA5Nlir8P2v0GkR8h0BCaRZFJN25DKDYracyy0DafpzRf4kotz3QSfxTAmjQxFhFOkZMXH5Cr2yUj9BvY4AIDdEPBH8pLJzmBnGNX1tzeCYwdtcorTAYghIL6vEL_AqXEKEhA4QQovF5Ya4M7L8mpQP7sPGhQPOwJ9K79zKxjMEabzr9VR8EoS7g",
              "scope": "GOOGLE",
              "types": [
                  "cafe",
                  "food",
                  "point_of_interest",
                  "establishment"
              ],
              "vicinity": "45 Keele Street, Collingwood"
          },
          {
              "geometry": {
                  "location": {
                      "lat": -37.79631639999999,
                      "lng": 144.9836943
                  },
                  "viewport": {
                      "northeast": {
                          "lat": -37.7949554697085,
                          "lng": 144.9849536802915
                      },
                      "southwest": {
                          "lat": -37.7976534302915,
                          "lng": 144.9822557197085
                      }
                  }
              },
              "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
              "id": "6b37d87353c62365621303910aae9ece07449b10",
              "name": "Breakfast Thieves",
              "opening_hours": {
                  "open_now": true,
                  "weekday_text": []
              },
              "photos": [
                  {
                      "height": 3024,
                      "html_attributions": [
                          "<a href=\"https://maps.google.com/maps/contrib/108225791942512645569/photos\">Dallas Goung</a>"
                      ],
                      "photo_reference": "CmRaAAAAaQnYF0gUP2XTIfLnPjHfJw8vYiz_AYLJIIfx1G8cBX50lDHxts0X9Q7qMjBYKMNzUpFCLfhSzyr0o8odSocVUc_Ophq6xCWzAOJp4LzPH67LPTmYNWl90MpXr2K3uXtKEhBQaFB2K0aLXfP3VZkXR2E_GhSn0yLVTfLVQAmgOYVVtD6nN8XyHQ",
                      "width": 4032
                  }
              ],
              "place_id": "ChIJuzzXWR9D1moRd14K9gKMOJg",
              "rating": 4.4,
              "reference": "CmRSAAAAWjQtxRFRy_2z2OcMlQNnE592MhCkspHGiTAp9oM-OU-fRyNoKebxJwP9aMvNSulCkEtct3HYJNL6qH3XxT1Kjkye6AZoc-NH9a5YC7UbbHEmVV5Ww3vmZo5r7dkBR8nxEhBl7mLUz3wcNl04KOJ1zVZEGhRMt0KYmJjftHS4OSP5o04pSMexfA",
              "scope": "GOOGLE",
              "types": [
                  "restaurant",
                  "cafe",
                  "food",
                  "store",
                  "point_of_interest",
                  "establishment"
              ],
              "vicinity": "1/420 Gore Street, Fitzroy"
          },
          {
              "geometry": {
                  "location": {
                      "lat": -37.7916874,
                      "lng": 144.9857113
                  },
                  "viewport": {
                      "northeast": {
                          "lat": -37.7903268697085,
                          "lng": 144.9869720802915
                      },
                      "southwest": {
                          "lat": -37.7930248302915,
                          "lng": 144.9842741197085
                      }
                  }
              },
              "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
              "id": "f762299f147995227bb69ef93aee71a20b5602c2",
              "name": "The Bell Jar",
              "opening_hours": {
                  "open_now": true,
                  "weekday_text": []
              },
              "photos": [
                  {
                      "height": 2448,
                      "html_attributions": [
                          "<a href=\"https://maps.google.com/maps/contrib/115316574428781449026/photos\">Sameer Cooshna</a>"
                      ],
                      "photo_reference": "CmRaAAAAvyaJuNpQhE3-yYBT0D7ERw7PHCjLAOTVDqiNRBlnMPG8XVm660ITLCFMhrmrtkZY3mfHkVYDf9V355oXjXcRQplNpq7_QIEcU3j5y9k2AJKS6MX74TuaPj0GfJ_3vo6kEhCpJrTj9Naz1XS8SxFwABnMGhT4yB6NrCIi1WDElvb4jvqxngS7gw",
                      "width": 3264
                  }
              ],
              "place_id": "ChIJV6MqnRdD1moR8RGb0Dd-pPM",
              "rating": 4.4,
              "reference": "CmRSAAAA16TX7D0em_3S2bMs8dMRWtLnwwTbK5CWLY63giA4URrWRMaB1zC5C46rZs1ytX-cSu5ht4YKK4zdWshMhk_9mNEncdZpsfg46CdtHOXfBs6wabR42QueiTVAJbtqt8PkEhCFVdudDf0scf7pivjlbrSZGhSr4TdsVI0h0djazjfYX-s2Tqlb6Q",
              "scope": "GOOGLE",
              "types": [
                  "cafe",
                  "food",
                  "point_of_interest",
                  "establishment"
              ],
              "vicinity": "656 Smith Street, Clifton Hill"
          },
          {
              "geometry": {
                  "location": {
                      "lat": -37.796445,
                      "lng": 144.984587
                  },
                  "viewport": {
                      "northeast": {
                          "lat": -37.7951022197085,
                          "lng": 144.9859934802915
                      },
                      "southwest": {
                          "lat": -37.7978001802915,
                          "lng": 144.9832955197085
                      }
                  }
              },
              "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
              "id": "0ad100a16e81dc4092a149999d1ad74d190550e3",
              "name": "Pavlov's Duck",
              "opening_hours": {
                  "open_now": true,
                  "weekday_text": []
              },
              "photos": [
                  {
                      "height": 3024,
                      "html_attributions": [
                          "<a href=\"https://maps.google.com/maps/contrib/110162005918551499348/photos\">Pete Raw</a>"
                      ],
                      "photo_reference": "CmRaAAAAT40KI9Bwds942WNdzc5UJ7pqpne0juOCz_PooN_PjISAwbe67KJ_S0ejkcgHOqkwAAZBLXxdLyvF_VOuWiQv7HKdfX1BJcwMp207aZxofmNL-CN4VwTgrLce8kD696jFEhCMOKMV0qRy3oujbpBHBkBvGhRfZUfMpwqCvMbmxfuKfkRrRtf8vg",
                      "width": 4032
                  }
              ],
              "place_id": "ChIJuUQrtRhD1moRJznfurcR-yQ",
              "rating": 4.2,
              "reference": "CmRRAAAALOz3fzlDcQ5DRUMiZH8uDyBj77rx9MFOHPdPVDK4vjxESrzvtqcY8kQJ3PLf1UtBaeXEctsS9K2qknI1KcBymoiCxyrq2jt350k3dOQnACphV5Ua4WvKxLvufBB-FqeEEhDeO5ypgQUm6W51pi-4dUudGhSdQFPGIaLeWRLq2nFRc2CVVfrMqA",
              "scope": "GOOGLE",
              "types": [
                  "cafe",
                  "bar",
                  "restaurant",
                  "food",
                  "point_of_interest",
                  "establishment"
              ],
              "vicinity": "401 Smith Street, Fitzroy"
          },
          {
              "geometry": {
                  "location": {
                      "lat": -37.79712500000001,
                      "lng": 144.984828
                  },
                  "viewport": {
                      "northeast": {
                          "lat": -37.7957633197085,
                          "lng": 144.9860586802915
                      },
                      "southwest": {
                          "lat": -37.7984612802915,
                          "lng": 144.9833607197085
                      }
                  }
              },
              "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
              "id": "fe15738a04483b18de48c2f935f4633e011c0eaf",
              "name": "HM Cafe at The Mag-Pie Shop",
              "opening_hours": {
                  "open_now": true,
                  "weekday_text": []
              },
              "photos": [
                  {
                      "height": 1125,
                      "html_attributions": [
                          "<a href=\"https://maps.google.com/maps/contrib/115072498638889348970/photos\">HM Cafe at The Mag-Pie Shop</a>"
                      ],
                      "photo_reference": "CmRaAAAA5seIkKAyTjQQGZf7F8TTzPLE4gW7XxcK0_A8y_2szps2dZpUj3zPZe76Q1GWEt3-Ho37X2f53qSgRbXcREjIi7NPhy-LeZS9BzCLq35coYMx3Z4sqcCX8dSD4cntc_VPEhB-j0rno8FnXOu_kE6R-IuFGhT4eC9vJXD4J9g3IJMu5uIHitpveQ",
                      "width": 1500
                  }
              ],
              "place_id": "ChIJr4trNx9D1moR_eT1vGfJA4c",
              "reference": "CmRSAAAAUzTMr9STyP8sLdR6VU5k4mm0qGCZcn6ICzMq-uz7SZGN_z2bKb5Anm_FGlAU21u6ngzPlkE-l1S7kBT9U3mJCh3SRRqZMcSy2pWCyzFKevy3rqKWVLc-yNOveJWQThgQEhC4Uo8q2q1nH8vKAxd2ZsCbGhSLVCu22C9Daz5Q9P1JHTtxnBKDhQ",
              "scope": "GOOGLE",
              "types": [
                  "meal_takeaway",
                  "cafe",
                  "restaurant",
                  "food",
                  "store",
                  "point_of_interest",
                  "establishment"
              ],
              "vicinity": "388 Smith Street, Collingwood"
          },
          {
              "geometry": {
                  "location": {
                      "lat": -37.7967745,
                      "lng": 144.9824243
                  },
                  "viewport": {
                      "northeast": {
                          "lat": -37.7954127697085,
                          "lng": 144.9836642302915
                      },
                      "southwest": {
                          "lat": -37.7981107302915,
                          "lng": 144.9809662697085
                      }
                  }
              },
              "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
              "id": "e62fbc3253e1a4163122aa17d9d67c3cb1c8dd1a",
              "name": "Min lokal",
              "opening_hours": {
                  "open_now": true,
                  "weekday_text": []
              },
              "photos": [
                  {
                      "height": 360,
                      "html_attributions": [
                          "<a href=\"https://maps.google.com/maps/contrib/102279800084404349952/photos\">Min lokal</a>"
                      ],
                      "photo_reference": "CmRaAAAA_jdhfXWWdPDIWqAFasOuSAhK-bqu9G4m-cwiGvan7KcwrN7urR6E3lHsW5jZbsAtDB8lgrsrIzDzoqFCEdSWvIbmAocLyYQVYE_jyrwlbKdFL2veO6Mv0cUeG2HyqmmjEhDYOFyWxi5dyOmLqB_ifT_fGhRY3SW5-inEhY9Ydnbrs_o7nf2V5g",
                      "width": 360
                  }
              ],
              "place_id": "ChIJqx9i6CFD1moROGSnhKmxlKA",
              "rating": 4.7,
              "reference": "CmRSAAAA_34s-jl23zh_htbL4HhHOg9KxKoKXHPmmhT1w9dtc7uyT8cnNRWKmL2t4VWSKW9IIQLyUm7efxvQYdAB2yGOsUK8Psi7PNbLEgXHCvQo-f6ECHe652ut5B4Yt8WDCL8gEhAJ7tjemmF_Ie3vUQc0XXTaGhQ8654Wc1I_Ltl62E4nkaSiPl8ROg",
              "scope": "GOOGLE",
              "types": [
                  "cafe",
                  "food",
                  "point_of_interest",
                  "establishment"
              ],
              "vicinity": "Fitzroy, 422 George Street, Melbourne"
          },
          {
              "geometry": {
                  "location": {
                      "lat": -37.7982136,
                      "lng": 144.9857192
                  },
                  "viewport": {
                      "northeast": {
                          "lat": -37.79695046970851,
                          "lng": 144.9870532802915
                      },
                      "southwest": {
                          "lat": -37.79964843029151,
                          "lng": 144.9843553197085
                      }
                  }
              },
              "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
              "id": "ae4736145a7fe15d35a365cb2bf46a426d949573",
              "name": "ACOFFEE",
              "opening_hours": {
                  "open_now": true,
                  "weekday_text": []
              },
              "photos": [
                  {
                      "height": 1500,
                      "html_attributions": [
                          "<a href=\"https://maps.google.com/maps/contrib/107093802205541446366/photos\">ACOFFEE</a>"
                      ],
                      "photo_reference": "CmRaAAAAGo8or3oZmK2J5kmEPceb4_TFKVRDG4-xeXJJza9VPcB0FwUZ_BeB6OaMoEM-KhXYYAbVSSt0CKYp0QvZ80_nT7J5KDS5_-YqPwx43EWPx1jcF3C3cYUsDdSVU5-V8RLmEhDgEXuhV9qIBexq5HhEX244GhQaZe9oTqDvBtBjaJ61K9YUr-nTCw",
                      "width": 2560
                  }
              ],
              "place_id": "ChIJs8sfHx9D1moRJnTIRru0bxk",
              "rating": 4.9,
              "reference": "CmRRAAAA8JeA3o3g7xrykTcoCGYCWRjIaKZ-IOqcMvatG-BCT2gfZlPYkf-X8t1ZOxMTejZHkwAFh4HZygmTHOUptP-BKn0ee3NR4bzW1U-g_w5ld3yEyqzEwldcQ3fr8Z6tohi2EhA6GvhjsHc6Oh0OKDBowvf9GhQ-7BrGWIAlFfGxtJQMv2HkZmoYpw",
              "scope": "GOOGLE",
              "types": [
                  "cafe",
                  "food",
                  "store",
                  "point_of_interest",
                  "establishment"
              ],
              "vicinity": "30 Sackville Street, Collingwood"
          },
          {
              "geometry": {
                  "location": {
                      "lat": -37.798451,
                      "lng": 144.984554
                  },
                  "viewport": {
                      "northeast": {
                          "lat": -37.7970863197085,
                          "lng": 144.9858084302915
                      },
                      "southwest": {
                          "lat": -37.7997842802915,
                          "lng": 144.9831104697085
                      }
                  }
              },
              "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
              "id": "c6907d193b54dd8c87feec4766c60ab2cf486b48",
              "name": "Tomboy Cafe",
              "opening_hours": {
                  "open_now": true,
                  "weekday_text": []
              },
              "photos": [
                  {
                      "height": 2988,
                      "html_attributions": [
                          "<a href=\"https://maps.google.com/maps/contrib/115701798463233283429/photos\">Penelope Becker</a>"
                      ],
                      "photo_reference": "CmRaAAAAnGnaAKfSYeKGLAIbfG1cQm7rIg8O28wj1yW6uv5wpH2acVuNEVLA0C1vb-fNXqng2crmT-SB1bTwvAeH0Apd2hy-b0q004su91AeMGmvcJTg5L5Ls39mx9oJct29CJUtEhD6ocRjKJWMqP-89-loPZcrGhRuc1Zz5Th4XtkfQnBeIjbbKzx1AA",
                      "width": 5312
                  }
              ],
              "place_id": "ChIJUzwUcx9D1moRzA16P3ldlf0",
              "rating": 3.8,
              "reference": "CmRSAAAAjtIVDQWPqjaLmG6_woPmm0TyaDpuZLK_0kFYEmqKt2G-cTAjdu4cbCnrGsXF7zzlXfrGcCT9V1twXEWpXLrjkG_IygDQ2VnuAzbEwAYFxgTRW0W3UJRmT-xxR5v4Gt06EhArYnHlj7WdcdLkfj8RQLTnGhRt1MokxkTofzm8MrGccr5S1X_JtQ",
              "scope": "GOOGLE",
              "types": [
                  "cafe",
                  "food",
                  "point_of_interest",
                  "establishment"
              ],
              "vicinity": "356 Smith Street, Melbourne"
          },
          {
              "geometry": {
                  "location": {
                      "lat": -37.798511,
                      "lng": 144.98464
                  },
                  "viewport": {
                      "northeast": {
                          "lat": -37.7971470697085,
                          "lng": 144.9858462802915
                      },
                      "southwest": {
                          "lat": -37.7998450302915,
                          "lng": 144.9831483197085
                      }
                  }
              },
              "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
              "id": "516160256a53a13eee156b4c569f43167543fca0",
              "name": "table seven",
              "opening_hours": {
                  "open_now": true,
                  "weekday_text": []
              },
              "photos": [
                  {
                      "height": 1200,
                      "html_attributions": [
                          "<a href=\"https://maps.google.com/maps/contrib/115460214706748009781/photos\">Simon Pender</a>"
                      ],
                      "photo_reference": "CmRaAAAAoBJVe3a-2bhSOyevlcGTzNjuWT5agfk_J9xIps6L3r2GVzDCrbxXmnBN8hMv5iiUJ4f3Dtu04QxRwj20P7J7C8jsROe7u98AAzJiPiMtM5G9QLX8y5EeTob8wWBDJoyJEhD8-JEFm2nzCoImSnuxifPdGhQd7lY2ayD7bqsFCRykvVjTEtcb5Q",
                      "width": 1600
                  }
              ],
              "place_id": "ChIJ7224DB9D1moRJEmQ_Si-QWM",
              "rating": 3.7,
              "reference": "CmRRAAAAdfiFZ1yCoQIaqQRpiO0S8DREdY51fMqtRecuwrZzAhi-MKBV1L5YNr-0XS59Vq1l0vFmQ5TCTcOBp_MPv5aO2IYWrpo6FJ2JQeM9iAUjAe0xdwnfSpxbfJE2ReTwh83VEhA9GnU3Qs47qarkw_6z2pW1GhQX9PWDby3W09i2LPoj4MFx9JAl7Q",
              "scope": "GOOGLE",
              "types": [
                  "cafe",
                  "restaurant",
                  "food",
                  "store",
                  "point_of_interest",
                  "establishment"
              ],
              "vicinity": "354 Smith Street, Collingwood"
          },
          {
              "geometry": {
                  "location": {
                      "lat": -37.796594,
                      "lng": 144.9876489
                  },
                  "viewport": {
                      "northeast": {
                          "lat": -37.79525246970849,
                          "lng": 144.9890692802915
                      },
                      "southwest": {
                          "lat": -37.79795043029149,
                          "lng": 144.9863713197085
                      }
                  }
              },
              "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
              "id": "80ff1972568d6e842ab58d3e7de03c281a0cc5d0",
              "name": "The Knife Shop Cafe",
              "opening_hours": {
                  "open_now": true,
                  "weekday_text": []
              },
              "photos": [
                  {
                      "height": 2204,
                      "html_attributions": [
                          "<a href=\"https://maps.google.com/maps/contrib/104965652437427356466/photos\">David Sarkies</a>"
                      ],
                      "photo_reference": "CmRaAAAAEMH6-FKyV7aSv30lR_mLzirNfGd0gWftLrFtxpMEUw872Pbx3IyvZSUBXBs22g4ZDCdTVd-7J_EePDtqf8fRo0JKU6cAk05GUJUQ5GekzpoHNLwlgZtQSiS4PzUPThMvEhBS6CwQOSljRVFX-26Wx3jSGhTHuP6asiR2lUfi4tn0q8uRRllC8g",
                      "width": 3920
                  }
              ],
              "place_id": "ChIJZ2hjQRlD1moRvqPh0hSyXkI",
              "rating": 3.9,
              "reference": "CmRRAAAAVjfo8fu44ghqzBqIPfVJ3gk5cWOFH__A_r0QcipF0anck0yHsS77p-8IWj3uXPq1npSv-oL8O3h_pI79oYfsVZEoty4XvbO8eKel1h5eBOzH2CPRBmz4Y7yBcuSExDHfEhCkxhGRyVysBx1-PN-7D1QdGhRPsY18nBKMxmXH-0weHmN4YDYDHw",
              "scope": "GOOGLE",
              "types": [
                  "cafe",
                  "food",
                  "point_of_interest",
                  "establishment"
              ],
              "vicinity": "287 Wellington Street, Collingwood"
          },
          {
              "geometry": {
                  "location": {
                      "lat": -37.797026,
                      "lng": 144.984831
                  },
                  "viewport": {
                      "northeast": {
                          "lat": -37.79565631970851,
                          "lng": 144.9860700802915
                      },
                      "southwest": {
                          "lat": -37.79835428029151,
                          "lng": 144.9833721197085
                      }
                  }
              },
              "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
              "id": "80fa2594384a3b613261c709bb5b47488323f58a",
              "name": "The Craft & Co",
              "opening_hours": {
                  "open_now": true,
                  "weekday_text": []
              },
              "photos": [
                  {
                      "height": 667,
                      "html_attributions": [
                          "<a href=\"https://maps.google.com/maps/contrib/104245423356642230112/photos\">The Craft &amp; Co</a>"
                      ],
                      "photo_reference": "CmRaAAAATV9BwN3fFL2qT9nA9jprUUB3PJ2QyKDF77O4u3ByaHnjIyjgAUAJugGxpkd_N98HLmOqzsUjaBYLwwSVzOmgReDrwXvH3DKiUNVR5qts6CaoU0AXBPbozm3mSvYEUKM5EhAqSkFRzwarBZRrPCF289LlGhQrkJDkSQAlL_-OIXdgDVrS2kMJpA",
                      "width": 1000
                  }
              ],
              "place_id": "ChIJEXg7Nh9D1moRoksHgQJaI70",
              "rating": 3.7,
              "reference": "CmRSAAAAu5JYzwNj7E4ismL9CiIB9Otg0wnUiYOo1YpexdxK49EVDfBZubyocn6-lYEG7XreNMvXgsJea86nSfg8S1QR_-_NWe4wnD11EVmn6hCIdjZTo802EsdtUn41QFo3aIeTEhDM0kKVAt1ZLVlyIPXLQuXPGhRBldku6Jewz5ZbWVLPjDz8EUJVng",
              "scope": "GOOGLE",
              "types": [
                  "cafe",
                  "bar",
                  "food",
                  "store",
                  "point_of_interest",
                  "establishment"
              ],
              "vicinity": "390 Smith Street, Collingwood"
          },
          {
              "geometry": {
                  "location": {
                      "lat": -37.797356,
                      "lng": 144.9847228
                  },
                  "viewport": {
                      "northeast": {
                          "lat": -37.79599441970851,
                          "lng": 144.9859861802915
                      },
                      "southwest": {
                          "lat": -37.7986923802915,
                          "lng": 144.9832882197085
                      }
                  }
              },
              "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
              "id": "bf788f22b0588bdb01f274550a1961d1c141ff3e",
              "name": "Trang Bakery and Cafe",
              "opening_hours": {
                  "open_now": true,
                  "weekday_text": []
              },
              "photos": [
                  {
                      "height": 1200,
                      "html_attributions": [
                          "<a href=\"https://maps.google.com/maps/contrib/115460214706748009781/photos\">Simon Pender</a>"
                      ],
                      "photo_reference": "CmRaAAAAcko5_nF5dUe76lll9JREwKz6e9W5KCg902kkGjmBD1Fd_DOM76FsHzsR1Za9EsjDolLQBWUfQzPnI8yd2IjOBWv7KYK0t2Xar6NvTiFyAoC0wGq6JnHZqVK-TL9D3RfQEhAsxMe-WYJh8wM0iPon8Ko1GhQRnTECy4jxQP-5qMX3N20NqwwPfg",
                      "width": 1600
                  }
              ],
              "place_id": "ChIJD0rVOx9D1moRkT1CVY6ln5M",
              "rating": 4.7,
              "reference": "CmRSAAAAGC-52JLRP6DmbNJw0m8uJc9h2CVOAMZXc3IJBiDuY5nZr1CLgsc7mOeBQ4Nxou2uBt1Iel84TA2IBLnuytGh1rXiMgpFkXGhoxQ_D-vqZCcxkh7j_WL4Tjin6p62HTswEhDBbaxSR2oq_ZVnXfnAORodGhTEO6hmUMkHHMRZfA1989XpKi2voA",
              "scope": "GOOGLE",
              "types": [
                  "cafe",
                  "food",
                  "point_of_interest",
                  "establishment"
              ],
              "vicinity": "382 Smith Street, Collingwood"
          },
          {
              "geometry": {
                  "location": {
                      "lat": -37.7977916,
                      "lng": 144.9860549
                  },
                  "viewport": {
                      "northeast": {
                          "lat": -37.7964211197085,
                          "lng": 144.9874801802915
                      },
                      "southwest": {
                          "lat": -37.7991190802915,
                          "lng": 144.9847822197085
                      }
                  }
              },
              "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
              "id": "233964420692f3ea3ff336680b92da1c75aaee88",
              "name": "Casati's Deli",
              "opening_hours": {
                  "open_now": true,
                  "weekday_text": []
              },
              "photos": [
                  {
                      "height": 1350,
                      "html_attributions": [
                          "<a href=\"https://maps.google.com/maps/contrib/117964637569035978293/photos\">Ian Meyer</a>"
                      ],
                      "photo_reference": "CmRaAAAAU25lwN5OWXgs76YqHa9-GGV6tDo7ixY6ZC0ngK4Tx4y_g--SB5WiVlRecDXPcA8mpJOeUi6qJpqpBKeqvUsbCvBcg2YXfVvYoQqYmc6LpaBX0QhM77cb2fj2XBdX_aq0EhBXvOZNSzJKemuvQKSvljACGhS2W8gdX6tLjmqQ_-2iSeSzHR9-WA",
                      "width": 1080
                  }
              ],
              "place_id": "ChIJaQ8J2R5D1moRdnloKLOgop0",
              "rating": 5,
              "reference": "CmRSAAAA_7QdaRVmFbHhiqlwjVFTqXrzWXVOcN0knuo4d90_8tXfgunjNd4zxnFKz_6cfnHyhl4rsM5t3YDNm45qQr8pXLO4w3FIj8TZ0TD7GLCqraOPG4g2ap8W9WpsS9uoJOhmEhBCJlPjYE-rShiBKEHe0QXQGhQAGIo6qr7hz7z577uOKPa1ozSjRQ",
              "scope": "GOOGLE",
              "types": [
                  "cafe",
                  "food",
                  "point_of_interest",
                  "establishment"
              ],
              "vicinity": "25 Easey Street, Collingwood"
          },
          {
              "geometry": {
                  "location": {
                      "lat": -37.7979723,
                      "lng": 144.9845288
                  },
                  "viewport": {
                      "northeast": {
                          "lat": -37.7966233197085,
                          "lng": 144.9858777802915
                      },
                      "southwest": {
                          "lat": -37.7993212802915,
                          "lng": 144.9831798197085
                      }
                  }
              },
              "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
              "id": "c14dffae1c3d914361199ac9e349ba4abf459f11",
              "name": "Garden Club",
              "place_id": "ChIJCcambB9D1moRqDQrbk_F33g",
              "reference": "CmRRAAAANIMmw6GoB5ONQTmfgRKjYWhmHJASYYYHA6b2VRuU1XH3w5w4qFUCtxZosh6UFH9fh1oNzw3RBxy_7yQYg0On4nequzT_n2Ju4hkNOHQ485sWVt6KbOLRUGPFJnFY1aZHEhA8Qgl5onAEUeMvhDhKx5xtGhRyehVZoAjdho6p7Mq9k4nYfLzJLw",
              "scope": "GOOGLE",
              "types": [
                  "cafe",
                  "food",
                  "point_of_interest",
                  "establishment"
              ],
              "vicinity": "368 Smith Street, Collingwood"
          },
          {
              "geometry": {
                  "location": {
                      "lat": -37.798511,
                      "lng": 144.98464
                  },
                  "viewport": {
                      "northeast": {
                          "lat": -37.7971470697085,
                          "lng": 144.9858462802915
                      },
                      "southwest": {
                          "lat": -37.7998450302915,
                          "lng": 144.9831483197085
                      }
                  }
              },
              "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
              "id": "445a0f90a15f4790614cbc48157f92c2a9740df1",
              "name": "Cafe Bohemio Bookshop & Gallery",
              "place_id": "ChIJ7224DB9D1moRCq-rnVz2EIM",
              "reference": "CmRSAAAA-33rZKWbZfOSJDpuTuq3RMB5Fz2EUfOZdic9Dqob_nI0tUH2fE6uEYmrknc6ONlaczztwbXt2KGHgFNcd5dlhulWzbgxdLXUWJKN5zOyJdl2tjyzrJjqaBKqDJryUDsZEhDKs8nWkXKvScMTRERk3WQUGhT3UmMyWpDlXG-nQv4hvHzg-lmo7g",
              "scope": "GOOGLE",
              "types": [
                  "cafe",
                  "food",
                  "point_of_interest",
                  "establishment"
              ],
              "vicinity": "354 Smith Street, Collingwood"
          },
          {
              "geometry": {
                  "location": {
                      "lat": -37.79786259999999,
                      "lng": 144.9846952
                  },
                  "viewport": {
                      "northeast": {
                          "lat": -37.7965136197085,
                          "lng": 144.9860441802915
                      },
                      "southwest": {
                          "lat": -37.7992115802915,
                          "lng": 144.9833462197085
                      }
                  }
              },
              "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
              "id": "30edebd1916ab580a1a3f8b4a432db57d1cb6370",
              "name": "Cafe On Smith",
              "photos": [
                  {
                      "height": 1840,
                      "html_attributions": [
                          "<a href=\"https://maps.google.com/maps/contrib/115460214706748009781/photos\">Simon Pender</a>"
                      ],
                      "photo_reference": "CmRaAAAA1FDL247kPYDoIRcA7CevD6LAAR8vCO511H31H0QMgjtFCYlvBEk7wD5zH7lqXlmHYXMpwsaCm5ZMxkivYxKptEtNM1ZHM2ldCk319R7KaLH9695cS3eOx4XoswbOhDFDEhDow9pwqGQOPeSH41jPxz-3GhRAiP4rYOz3VynMJEx7w2PjMiWZiw",
                      "width": 3264
                  }
              ],
              "place_id": "ChIJ22QeFR9D1moR2cM6r6G0pTs",
              "rating": 4,
              "reference": "CmRRAAAATB6Ob-cx7d9LjdrBQk-storJUSgRp_max4841yAbKeTf_GoTnJhRqrKT5IWhFumEcJzkqx3hMlPqfSRuwdLOnGH6T1ZJpWvieELF3HOha1hx2OSKFJptk4z1twU0bBRzEhBINDRQMczRygbdNoRDc9WmGhTC7PG7AQG_zjKwo5t8-CAEocR9-Q",
              "scope": "GOOGLE",
              "types": [
                  "cafe",
                  "food",
                  "point_of_interest",
                  "establishment"
              ],
              "vicinity": "372 Smith Street, Collingwood"
          }
      ]
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(latLng) {
    this.setState({latLng})
  }

  render() {
    const {results} = this.state;
    return (
      <main>
        <SearchBar getCafes={this.onFormSubmit}/>
        <ul id="list-component">
          <li id="you">You</li>
          {results.map((p) =>
            <li key={p.id}>
              {p.name}
            </li>
          )}
        </ul>
      </main>
    );
  }
}

export default App;
