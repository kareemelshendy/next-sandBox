export class NetworkError extends Error {}

export class UnProcessableEntityError extends Error {
	public errorMap: { [param: string]: string; message: string } | undefined;
	constructor(
		message: string,
		errorMap?: { [param: string]: string; message: string }
	) {
		super(message);
		this.errorMap = errorMap;
	}
}

export class ConflictError extends Error {}

export class BadRequestError extends Error {
	public param: string | undefined;
	constructor(message: string, param?: string) {
		super(message);
		this.param = param;
	}
}

export class NotFoundError extends Error {}

export class UnAuthenticatedError extends Error {}

export class ForbiddenError extends Error {}

export class InternalServerError extends Error {}

export type HttpError =
	| NetworkError
	| UnAuthenticatedError
	| ForbiddenError
	| BadRequestError
	| UnProcessableEntityError
	| NotFoundError
	| ConflictError
	| UnProcessableEntityError;
