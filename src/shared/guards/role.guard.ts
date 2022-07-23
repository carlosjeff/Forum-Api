import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class RoleGuard implements CanActivate {

  constructor(private refletor: Reflector) {
    
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {


    const role = this.refletor.get('role', context.getHandler()) as string[];
    if(!role) return true;

    const request = context.switchToHttp().getRequest();
    const user = request.user;
    
    return role.includes(user.role);
  }
}
