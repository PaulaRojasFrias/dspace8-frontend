import { Item } from '../core/shared/item.model';
import { RemoteData } from '../core/data/remote-data';
import { createSuccessfulRemoteDataObject$ } from '../shared/remote-data.utils';
import { MetadataMap } from '../core/shared/metadata.models';
import { Observable } from 'rxjs';

// Estructura base para cumplir con el tipo estricto MetadataValue de DSpace 8
const createMetadataValue = (value: string, language: string = 'es') => [
  {
    value: value,
    language: language,
    uuid: 'mock-value-uuid',
    place: 0,
    authority: null,
    confidence: -1
  }
];

const mockMetadata: MetadataMap = {
  'dc.title': createMetadataValue('Desarrollo de un Sistema de Gestión para el Repositorio de la FTyCA'),
  'dc.contributor.author': createMetadataValue('Rojas Frias, Paula Agostina'),
  'dc.description.abstract': createMetadataValue('Este documento presenta una simulación completa del flujo de datos en la interfaz.'),
  
  // Metadatos institucionales UNCA
  'dc.relation.event': createMetadataValue('XV Jornadas de Ciencia y Tecnología UNCA 2026'),
  'dc.description.filiation': createMetadataValue('Universidad Nacional de Catamarca - Facultad de Tecnología y Ciencias Aplicadas'),
  'dc.type.version': createMetadataValue('Versión Publicada (Final)'),

  // Vocabulario controlado SNRD/OpenAIRE
  'dc.type': createMetadataValue('bachelorThesis') 
};

export const mockUncaItem: Item = Object.assign(new Item(), {
  uuid: 'unca-mock-uuid-12345',
  id: 'unca-mock-uuid-12345',
  name: 'Desarrollo de un Sistema de Gestión para el Repositorio de la FTyCA',
  metadata: mockMetadata,
  _links: {
    self: { href: 'http://localhost:4000/api/core/items/unca-mock-uuid-12345' }
  }
});

export const mockUncaItemRD$: Observable<RemoteData<Item>> = createSuccessfulRemoteDataObject$(mockUncaItem);
