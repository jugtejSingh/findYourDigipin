<!-- src/routes/+page.svelte -->
<script lang="ts">
  import {onMount} from 'svelte';
  import {browser} from '$app/environment';
  import {getDigiPin} from './digipin';
  import {PUBLIC_API_KEY} from "$env/static/public";

  let mapContainer: HTMLDivElement;
  let map: google.maps.Map
  let digipinVal: String = "Empty Value"
  let input: HTMLDivElement
  let showText = false;
  const position: {
    lat: number,
    lng: number
  } = {lat: 28.614592592338226, lng: 77.19941925296523};
  onMount(async () => {
    if (!browser) return;

    // Load Google Maps script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${PUBLIC_API_KEY}&loading=async&libraries=marker,places&callback=initMap`;
    script.async = true;

    // Make initMap globally available
    (window as any).initMap = initMap;

    document.head.appendChild(script);
  });

  async function initMap() {
    map = new google.maps.Map(mapContainer, {
      center: position,
      mapId: 'DEMO_MAP_ID',
      zoom: 13,
      disableDefaultUI: true,
    });
    const marker = new google.maps.marker.AdvancedMarkerElement({
      map: map,
      position: position,
      gmpClickable: true,
    });
    map.addListener("click", (e) => {
      marker.position = e.latLng
      showText = true
      digipinVal = getDigiPin(e.latLng.lat(), e.latLng.lng())
    })
    // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    const placeAutocomplete = new google.maps.places.PlaceAutocompleteElement({
      includedRegionCodes: ['in'],
    });
    placeAutocomplete.setAttribute('placeholder', 'Enter any Address');
    placeAutocomplete

    input.appendChild(placeAutocomplete);

    //@ts-ignore
    placeAutocomplete.addEventListener('gmp-select', async ({placePrediction}) => {
      const place = placePrediction.toPlace();
      // Fetch the required fields
      await place.fetchFields({
        fields: ['displayName', 'formattedAddress', 'location']
      });

      if (place.location) {
        // Move map and marker to selected place
        map.setCenter(place.location);
        map.setZoom(16); // Zoom in closer
        marker.position = place.location;

        // Update your digipin
        showText = true;
        digipinVal = getDigiPin(place.location.lat(), place.location.lng());
      }

      console.log('Selected place:', place.toJSON());
    });
  }

</script>
<div style="position: relative">
  <div bind:this={input} class="Input"> </div>
  <div bind:this={mapContainer} style="height: 99dvh; width: 100%;"></div>
  <div class={showText ? "Text2" : "Text" }>{digipinVal}</div>
  <div class="visually-hidden">
    <h1>Welcome to Get Digipin</h1>
    <p>Your quick and easy resource to find any address and its digipin within seconds</p>
  </div>
</div>

<style>
  .Input {
    position: absolute;
    z-index: 10;
    padding-left: 1%;
    margin-left: 35%;
    width: 30%;
    margin-top: 1%;
    height: 2.4rem;
  }
  .Input::placeholder {
    color: rgb(255,255,255);
  }
  .Text {
    display: none;
    left: 46%;
  }
  .Text2 {
    -webkit-animation: showDigipin;
    -o-animation: showDigipin;
    animation: showDigipin 0.2s linear forwards;
    position: absolute;
    bottom: 0;
    left: 46%;
    background: rgba(0,0,0,0.65);
    color: white;
    padding: 1%;
    font-size: 1.2rem;
    z-index: 100;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
  }
  @keyframes showDigipin {
    0%{
      display: none;
    }
    1%{
      display: inline;
      transform: translateY(2rem);
    }
    100%{
      transform: translateY(-5rem);
    }
  }
  @media screen and (max-width: 900px){
    .Text2{
      left: 39%;
    }
    .Input {
      width: 80%;
      margin-left: 10%;
    }
  }
  :global(gmp-place-autocomplete){
  background: white;
  }

  .visually-hidden{
    clip-path: inset(50%) !important;
    height: 1px !important;
    width: 1px !important;
    overflow: hidden !important;
    position: absolute !important;
    white-space: nowrap !important;
    border: 0 !important;
    user-select: none !important;
  }
</style>