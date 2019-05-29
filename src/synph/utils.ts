import Vue, { AsyncComponent, FunctionalComponentOptions, ComponentOptions } from "vue";
import { ThisTypedComponentOptionsWithArrayProps, ThisTypedComponentOptionsWithRecordProps, RecordPropsDefinition } from "vue/types/options";
export * from './ValNode'
import { ASyntax } from '../syntax';

export function component<Data, Methods, Computed, Props>(definition: AsyncComponent<Data, Methods, Computed, Props>): AsyncComponent<Data, Methods, Computed, Props>
export function component<Data, Methods, Computed, PropNames extends string = never>(definition: ThisTypedComponentOptionsWithArrayProps<Vue, Data, Methods, Computed, PropNames>): ThisTypedComponentOptionsWithArrayProps<Vue, Data, Methods, Computed, PropNames>
export function component<Data, Methods, Computed, Props>(definition: ThisTypedComponentOptionsWithRecordProps<Vue, Data, Methods, Computed, Props>): ThisTypedComponentOptionsWithRecordProps<Vue, Data, Methods, Computed, Props>
export function component<PropNames extends string>(definition: FunctionalComponentOptions<Record<PropNames, any>, PropNames[]>): FunctionalComponentOptions<Record<PropNames, any>, PropNames[]>
export function component<Props>(definition: FunctionalComponentOptions<Props, RecordPropsDefinition<Props>>): FunctionalComponentOptions<Props, RecordPropsDefinition<Props>>
export function component(definition?: ComponentOptions<Vue>): ComponentOptions<Vue>
export function component(definition: any) {
    return definition
}

export function SynValidator<T extends new (...any: any[]) => ASyntax>(o: T = ASyntax as any) {
    return {
        type: Object,
        required: true,
        validator(value: any) {
            return value instanceof (o as any)
        }
    }
}