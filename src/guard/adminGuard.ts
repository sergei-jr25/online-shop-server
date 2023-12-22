import {
	CanActivate,
	ExecutionContext,
	ForbiddenException,
	Injectable
} from '@nestjs/common'
import { Observable } from 'rxjs'

@Injectable()
export class IsAdminGuard implements CanActivate {
	canActivate(
		context: ExecutionContext
	): boolean | Promise<boolean> | Observable<boolean> {
		const request = context.switchToHttp().getRequest()

		const user = request.user
		console.log(user.isAdmin)
		if (!user.isAdmin) throw new ForbiddenException('You have no rights!')

		return user.isAdmin
	}
}
