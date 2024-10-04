import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class UserStatusGuard implements CanActivate {
    constructor(private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user; // el usuario autenticado

    if (user.isDeleted || user.isBanned) {
        throw new ForbiddenException('Usuario no autorizado para realizar esta acción.');
    }

        return true;
    }
}