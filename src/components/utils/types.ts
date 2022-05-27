import { CSSObject, FlattenSimpleInterpolation } from 'styled-components';

export type PartialRecord<K extends keyof any, T> =  Partial<Record<K, T>>
export type MediaQueryCallBack = (style: TemplateStringsArray | CSSObject) => FlattenSimpleInterpolation;
export type MediaQuery = (point: string) => MediaQueryCallBack;