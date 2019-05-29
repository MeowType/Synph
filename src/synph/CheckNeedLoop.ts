import { component, SynValidator } from './utils';
import { ISyntax, ASyntax, Group, Loop, Nullable } from '../syntax';

export const CheckNeedLoop = component<{
  syn: ISyntax
}>({
  name: 'CheckNeedLoop',
  functional: true,
  props: {
    syn: SynValidator()
  },
  render(h, context) {
    const { props, slots, scopedSlots } = context
    const { syn } = props
    if (syn.loopfor == null) {
      return scopedSlots.body == null ? slots().default : scopedSlots.body({
        items: slots().default
      })!
    } else {
      const range_tag = get_loop_range_tag(syn.loopfor)
      if (range_tag == 'n') {
        if (syn.loopfor.min == 0) return []
        if (syn.loopfor.min == 1) return scopedSlots.body == null ? slots().default : scopedSlots.body({
          items: slots().default
        })!
      }
    }
    return h('div', 'fuck')
  }
})

export type loop_range_tag = 'n' | '0..1' | '0..n' | 'n..n' | '0..' | '1..' | 'n..'
export function get_loop_range_tag(range?: Loop): Nullable<loop_range_tag> {
  if (range == null) return null
  let ret: Nullable<loop_range_tag> = null
  if (range.min != null) {
    if (range.max != null && range.max >= range.min && range.max >= 0) { // from..to
      if (range.max == range.min || range.max == 0) { // x
        ret = 'n'
      } else { // from..to
        if (range.min < 1) {
          if (range.max == 1) {
            ret = '0..1'
          } else {
            ret = '0..n'
          }
        } else {
          ret = 'n..n'
        }
      }
    } else { // from..
      if (range.min < 1) { // 0..  x+
        ret = '0..'
      } else if (range.min == 1) { //1..
        ret = '1..'
      } else {
        ret = 'n..'
      }
    }
  } else if (range.max != null) { // ..to
    if (range.max < 1) { // ..0
      ret = 'n'
      range.min = 0
    } else if (range.max == 1) {
      ret = '0..1'
    } else {
      ret = '0..n'
    }
  } else { // ..
    ret = null
  }
  return ret
}