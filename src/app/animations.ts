import {
  trigger,
  state,
  transition,
  style,
  animation,
  animate,
} from "@angular/animations";

export let fadeTrigger = trigger("fadeAnomation", [
  state("void", style({ backgroundColor: "yellow", opacity: 0 })),

  //void <=> *
  transition(":enter, :leave", [
    // style({ backgroundColor: "yellow", opacity: 0 }),
    animate(3000),
  ]),
]);
