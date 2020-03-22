export function Unsubscribable(): ClassDecorator {
  return (constructor: any) => {
    const originNgOnDestroy = constructor.prototype.ngOnDestroy;

    constructor.prototype.ngOnDestroy = function(...args) {
      if (originNgOnDestroy) {
        originNgOnDestroy.apply(this, args);
      }

      this.complete$.next();
      this.complete$.complete();
    };
  };
}
