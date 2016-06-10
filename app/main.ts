import { bootstrap } from '@angular/platform-browser-dynamic';
import { App } from './components/index';
bootstrap(App);


setTimeout(function () {
    if (self.fetch) {
        fetch('dist/components/Other/Other.js').then((response) => {
            return response.text();
        }).then((response) => {
            const script = document.createElement('script');
            script.innerHTML = response;
            document.body.appendChild(script);
        });
    }
}, 7000);