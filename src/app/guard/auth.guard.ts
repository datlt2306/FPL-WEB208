import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  if (!user || user.user.id !== 1) {
    return false
  }
  return true;
};
/**
 * Bước 1: ng g guard guard/auth
 * Bước 2: Sửa file src/app/guard/auth.guard.ts như nội dung trên
 * Bước 3: Sửa file src/app/app.routes.ts, thêm canActivate: [authGuard] vào route cần bảo vệ
 * 
 */
