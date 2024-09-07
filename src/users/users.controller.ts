import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post('register')
    async register(@Body() body: { username: string; password: string; role: 'client' | 'provider' }) {
        const { username, password, role } = body;
        return this.usersService.create(username, password, role);
    }
}
