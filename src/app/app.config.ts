import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { LoadingInterceptorService } from './core/interceptors/loading-interceptor.service';
import { BrowserModule } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
  provideRouter(routes),
  provideAnimations(),
  provideHttpClient(withInterceptorsFromDi()),
  {
    provide:HTTP_INTERCEPTORS,
    useClass:LoadingInterceptorService,
    multi:true
  },
  importProvidersFrom(BrowserModule),
  importProvidersFrom([BrowserAnimationsModule])
]
};
