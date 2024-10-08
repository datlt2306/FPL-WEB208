import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const user = JSON.parse(localStorage.getItem('user') || "{}");
  if (!user || user.user.id !== 1) return false
  return true;
};

/**
 * Bước 1: Cài đặt Guard: ng g guard guard/auth
 * Bước 2: Sửa file guard/auth.guard.ts với nội dung như trên
 * Bước 3: Sửa file app.routes.ts, cho thêm canActivate: [authGuard] vào route cần bảo vệ */